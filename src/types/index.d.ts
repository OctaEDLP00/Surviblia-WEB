import * as CSS from 'csstype';

/**
 * An interface that represents an error returned by the Clerk API.
 */
interface ClerkAPIError {
    /**
     * A string code that represents the error, such as `username_exists_code`.
     */
    code: string;
    /**
     * A message that describes the error.
     */
    message: string;
    /**
     * A more detailed message that describes the error.
     */
    longMessage?: string;
    /**
     * Additional information about the error.
     */
    meta?: {
        paramName?: string;
        sessionId?: string;
        emailAddresses?: string[];
        identifiers?: string[];
        zxcvbn?: {
            suggestions: {
                code: string;
                message: string;
            }[];
        };
        permissions?: string[];
    };
}
interface ClerkRuntimeError {
    code: string;
    message: string;
}

type AlertId = 'danger' | 'warning' | 'info';
type FieldId = 'firstName' | 'lastName' | 'name' | 'slug' | 'emailAddress' | 'phoneNumber' | 'currentPassword' | 'newPassword' | 'signOutOfOtherSessions' | 'passkeyName' | 'password' | 'confirmPassword' | 'identifier' | 'username' | 'code' | 'role' | 'deleteConfirmation' | 'deleteOrganizationConfirmation' | 'enrollmentMode' | 'affiliationEmailAddress' | 'deleteExistingInvitationsSuggestions' | 'legalAccepted';
type ProfileSectionId = 'profile' | 'username' | 'emailAddresses' | 'phoneNumbers' | 'connectedAccounts' | 'enterpriseAccounts' | 'web3Wallets' | 'password' | 'passkeys' | 'mfa' | 'danger' | 'activeDevices' | 'organizationProfile' | 'organizationDanger' | 'organizationDomains' | 'manageVerifiedDomains' | 'subscriptionsList' | 'paymentSources';
type ProfilePageId = 'account' | 'security' | 'organizationGeneral' | 'organizationMembers' | 'billing';
type UserPreviewId = 'userButton' | 'personalWorkspace';
type OrganizationPreviewId = 'organizationSwitcherTrigger' | 'organizationList' | 'organizationSwitcherListedOrganization' | 'organizationSwitcherActiveOrganization';
type CardActionId = 'havingTrouble' | 'alternativeMethods' | 'signUp' | 'signIn' | 'usePasskey' | 'waitlist';
type MenuId = 'invitation' | 'member' | ProfileSectionId;
type SelectId = 'countryCode' | 'role' | 'paymentSource';

interface Web3ProviderData {
    provider: Web3Provider;
    strategy: Web3Strategy;
    name: string;
}
type MetamaskWeb3Provider = 'metamask';
type CoinbaseWalletWeb3Provider = 'coinbase_wallet';
type OKXWalletWeb3Provider = 'okx_wallet';
type Web3Provider = MetamaskWeb3Provider | CoinbaseWalletWeb3Provider | OKXWalletWeb3Provider;
/**
 * @deprecated Use `import { WEB3_PROVIDERS } from "@clerk/shared/web3"` instead.
 *
 * @hidden
 */
declare const WEB3_PROVIDERS: Web3ProviderData[];
interface getWeb3ProviderDataProps {
    provider?: Web3Provider;
    strategy?: Web3Strategy;
}
/**
 * @deprecated This utility will be dropped in the next major release.
 *
 * @hidden
 */
declare function getWeb3ProviderData({ provider, strategy, }: getWeb3ProviderDataProps): Web3ProviderData | undefined | null;

type GoogleOneTapStrategy = 'google_one_tap';
type PasskeyStrategy = 'passkey';
type PasswordStrategy = 'password';
type PhoneCodeStrategy = 'phone_code';
type EmailCodeStrategy = 'email_code';
type EmailLinkStrategy = 'email_link';
type TicketStrategy = 'ticket';
type TOTPStrategy = 'totp';
type BackupCodeStrategy = 'backup_code';
type ResetPasswordPhoneCodeStrategy = 'reset_password_phone_code';
type ResetPasswordEmailCodeStrategy = 'reset_password_email_code';
type CustomOAuthStrategy = `oauth_custom_${string}`;
type EnterpriseSSOStrategy = 'enterprise_sso';
type OAuthStrategy = `oauth_${OAuthProvider}` | CustomOAuthStrategy;
type Web3Strategy = `web3_${Web3Provider}_signature`;
/**
 * @deprecated Use `EnterpriseSSOStrategy` instead.
 */
type SamlStrategy = 'saml';

type OAuthScope = string;
interface OAuthProviderData {
    provider: OAuthProvider;
    strategy: OAuthStrategy;
    name: string;
    docsUrl: string;
}
type FacebookOauthProvider = 'facebook';
type GoogleOauthProvider = 'google';
type HubspotOauthProvider = 'hubspot';
type GithubOauthProvider = 'github';
type TiktokOauthProvider = 'tiktok';
type GitlabOauthProvider = 'gitlab';
type DiscordOauthProvider = 'discord';
type TwitterOauthProvider = 'twitter';
type TwitchOauthProvider = 'twitch';
type LinkedinOauthProvider = 'linkedin';
type LinkedinOIDCOauthProvider = 'linkedin_oidc';
type DropboxOauthProvider = 'dropbox';
type AtlassianOauthProvider = 'atlassian';
type BitbucketOauthProvider = 'bitbucket';
type MicrosoftOauthProvider = 'microsoft';
type NotionOauthProvider = 'notion';
type AppleOauthProvider = 'apple';
type LineOauthProvider = 'line';
type InstagramOauthProvider = 'instagram';
type CoinbaseOauthProvider = 'coinbase';
type SpotifyOauthProvider = 'spotify';
type XeroOauthProvider = 'xero';
type BoxOauthProvider = 'box';
type SlackOauthProvider = 'slack';
type LinearOauthProvider = 'linear';
type XOauthProvider = 'x';
type EnstallOauthProvider = 'enstall';
type HuggingfaceOAuthProvider = 'huggingface';
type CustomOauthProvider = `custom_${string}`;
type OAuthProvider = FacebookOauthProvider | GoogleOauthProvider | HubspotOauthProvider | GithubOauthProvider | TiktokOauthProvider | GitlabOauthProvider | DiscordOauthProvider | TwitterOauthProvider | TwitchOauthProvider | LinkedinOauthProvider | LinkedinOIDCOauthProvider | DropboxOauthProvider | AtlassianOauthProvider | BitbucketOauthProvider | MicrosoftOauthProvider | NotionOauthProvider | AppleOauthProvider | LineOauthProvider | InstagramOauthProvider | CoinbaseOauthProvider | SpotifyOauthProvider | XeroOauthProvider | BoxOauthProvider | SlackOauthProvider | LinearOauthProvider | XOauthProvider | EnstallOauthProvider | HuggingfaceOAuthProvider | CustomOauthProvider;
/**
 * @deprecated Use `import { OAUTH_PROVIDERS } from "@clerk/shared/oauth"` instead.
 *
 * @hidden
 */
declare const OAUTH_PROVIDERS: OAuthProviderData[];
interface getOAuthProviderDataProps {
    provider?: OAuthProvider;
    strategy?: OAuthStrategy;
}
/**
 * @deprecated This utility will be dropped in the next major release.
 *
 * @hidden
 */
declare function getOAuthProviderData({ provider, strategy, }: getOAuthProviderDataProps): OAuthProviderData | undefined | null;
/**
 * @deprecated This utility will be dropped in the next major release.
 *
 * @hidden
 */
declare function sortedOAuthProviders(sortingArray: OAuthStrategy[]): OAuthProviderData[];

type ClerkResourceReloadParams = {
    rotatingTokenNonce?: string;
};
/**
 * Defines common properties and methods that all Clerk resources must implement.
 */
interface ClerkResource {
    /**
     * The unique identifier of the resource.
     */
    readonly id?: string | undefined;
    /**
     * The root path of the resource.
     */
    pathRoot: string;
    /**
     * Reload the resource and return the resource itself.
     */
    reload(p?: ClerkResourceReloadParams): Promise<this>;
}

type SamlIdpSlug = 'saml_okta' | 'saml_google' | 'saml_microsoft' | 'saml_custom';
type SamlIdp = {
    name: string;
    logo: string;
};
type SamlIdpMap = Record<SamlIdpSlug, SamlIdp>;
declare const SAML_IDPS: SamlIdpMap;

interface DeletedObjectResource {
    object: string;
    id?: string;
    slug?: string;
    deleted: boolean;
}

/**
 * Pagination params in request
 */
type ClerkPaginationRequest<T = object> = {
    /**
     * Maximum number of items returned per request.
     */
    limit?: number;
    /**
     * This is the starting point for your fetched results.
     */
    offset?: number;
} & T;
/**
 * An interface that describes the response of a method that returns a paginated list of resources.
 *
 * > [!TIP]
 * > Clerk's SDKs always use `Promise<ClerkPaginatedResponse<T>>`. If the promise resolves, you will get back the properties. If the promise is rejected, you will receive a `ClerkAPIResponseError` or network error.
 */
interface ClerkPaginatedResponse<T> {
    /**
     * An array that contains the fetched data.
     */
    data: T[];
    /**
     * The total count of data that exist remotely.
     */
    total_count: number;
}
/**
 * @interface
 */
type ClerkPaginationParams<T = object> = {
    /**
     * A number that specifies which page to fetch. For example, if `initialPage` is set to `10`, it will skip the first 9 pages and fetch the 10th page.
     * @default 1
     */
    initialPage?: number;
    /**
     * A number that specifies the maximum number of results to return per page.
     * @default 10
     */
    pageSize?: number;
} & T;

type WithOptionalOrgType<T> = T & {
    orgId?: string;
};
interface CommerceBillingNamespace {
    getPlans: () => Promise<CommercePlanResource[]>;
    getSubscriptions: (params: GetSubscriptionsParams) => Promise<ClerkPaginatedResponse<CommerceSubscriptionResource>>;
    getStatements: (params: GetStatementsParams) => Promise<ClerkPaginatedResponse<CommerceStatementResource>>;
    startCheckout: (params: CreateCheckoutParams) => Promise<CommerceCheckoutResource>;
}
type CommerceSubscriberType = 'org' | 'user';
type CommerceSubscriptionStatus = 'active' | 'ended' | 'upcoming';
type CommerceSubscriptionPlanPeriod = 'month' | 'annual';
interface CommercePaymentSourceMethods {
    initializePaymentSource: (params: Exclude<InitializePaymentSourceParams, 'orgId'>) => Promise<CommerceInitializedPaymentSourceResource>;
    addPaymentSource: (params: Exclude<AddPaymentSourceParams, 'orgId'>) => Promise<CommercePaymentSourceResource>;
    getPaymentSources: (params: Exclude<GetPaymentSourcesParams, 'orgId'>) => Promise<ClerkPaginatedResponse<CommercePaymentSourceResource>>;
}
interface CommerceProductResource extends ClerkResource {
    id: string;
    slug: string | null;
    currency: string;
    isDefault: boolean;
    plans: CommercePlanResource[];
}
interface GetPlansParams {
    subscriberType?: CommerceSubscriberType;
}
interface CommercePlanResource extends ClerkResource {
    id: string;
    name: string;
    amount: number;
    amountFormatted: string;
    annualAmount: number;
    annualAmountFormatted: string;
    annualMonthlyAmount: number;
    annualMonthlyAmountFormatted: string;
    currencySymbol: string;
    currency: string;
    description: string;
    isDefault: boolean;
    isRecurring: boolean;
    hasBaseFee: boolean;
    payerType: string[];
    publiclyVisible: boolean;
    slug: string;
    avatarUrl: string;
    features: CommerceFeatureResource[];
    __internal_toSnapshot: () => CommercePlanJSONSnapshot;
}
interface CommerceFeatureResource extends ClerkResource {
    id: string;
    name: string;
    description: string;
    slug: string;
    avatarUrl: string;
    __internal_toSnapshot: () => CommerceFeatureJSONSnapshot;
}
type CommercePaymentSourceStatus = 'active' | 'expired' | 'disconnected';
type GetPaymentSourcesParams = WithOptionalOrgType<ClerkPaginationParams>;
type PaymentGateway = 'stripe' | 'paypal';
type InitializePaymentSourceParams = WithOptionalOrgType<{
    gateway: PaymentGateway;
}>;
type AddPaymentSourceParams = WithOptionalOrgType<{
    gateway: PaymentGateway;
    paymentToken: string;
}>;
type RemovePaymentSourceParams = WithOptionalOrgType<unknown>;
type MakeDefaultPaymentSourceParams = WithOptionalOrgType<unknown>;
interface CommercePaymentSourceResource extends ClerkResource {
    id: string;
    last4: string;
    paymentMethod: string;
    cardType: string;
    isDefault: boolean;
    status: CommercePaymentSourceStatus;
    walletType: string | undefined;
    remove: (params?: RemovePaymentSourceParams) => Promise<DeletedObjectResource>;
    makeDefault: (params?: MakeDefaultPaymentSourceParams) => Promise<null>;
}
interface CommerceInitializedPaymentSourceResource extends ClerkResource {
    externalClientSecret: string;
    externalGatewayId: string;
}
type GetStatementsParams = WithOptionalOrgType<ClerkPaginationParams>;
type CommerceStatementStatus = 'open' | 'closed';
interface CommerceStatementResource extends ClerkResource {
    id: string;
    totals: CommerceStatementTotals;
    status: CommerceStatementStatus;
    timestamp: number;
    groups: CommerceStatementGroup[];
}
interface CommerceStatementGroup {
    timestamp: number;
    items: CommercePayment[];
}
type CommercePaymentChargeType = 'checkout' | 'recurring';
type CommercePaymentStatus = 'pending' | 'paid' | 'failed';
interface CommercePayment {
    id: string;
    amount: CommerceMoney;
    paymentSource: CommercePaymentSourceResource;
    subscription: CommerceSubscriptionResource;
    chargeType: CommercePaymentChargeType;
    status: CommercePaymentStatus;
}
type GetSubscriptionsParams = WithOptionalOrgType<ClerkPaginationParams>;
type CancelSubscriptionParams = WithOptionalOrgType<unknown>;
interface CommerceSubscriptionResource extends ClerkResource {
    id: string;
    paymentSourceId: string;
    plan: CommercePlanResource;
    planPeriod: CommerceSubscriptionPlanPeriod;
    status: CommerceSubscriptionStatus;
    periodStart: number;
    periodEnd: number;
    canceledAt: number | null;
    amount?: CommerceMoney;
    credit?: {
        amount: CommerceMoney;
    };
    cancel: (params: CancelSubscriptionParams) => Promise<DeletedObjectResource>;
}
interface CommerceMoney {
    amount: number;
    amountFormatted: string;
    currency: string;
    currencySymbol: string;
}
interface CommerceCheckoutTotals {
    subtotal: CommerceMoney;
    grandTotal: CommerceMoney;
    taxTotal: CommerceMoney;
    totalDueNow: CommerceMoney;
    credit: CommerceMoney;
}
interface CommerceStatementTotals extends Omit<CommerceCheckoutTotals, 'totalDueNow'> {
}
type CreateCheckoutParams = WithOptionalOrgType<{
    planId: string;
    planPeriod: CommerceSubscriptionPlanPeriod;
}>;
type ConfirmCheckoutParams = WithOptionalOrgType<{
    paymentSourceId?: string;
} | {
    paymentToken?: string;
    gateway?: PaymentGateway;
} | {
    gateway?: PaymentGateway;
    useTestCard?: boolean;
}>;
interface CommerceCheckoutResource extends ClerkResource {
    id: string;
    externalClientSecret: string;
    externalGatewayId: string;
    statement_id: string;
    paymentSource?: CommercePaymentSourceResource;
    plan: CommercePlanResource;
    planPeriod: CommerceSubscriptionPlanPeriod;
    status: string;
    totals: CommerceCheckoutTotals;
    subscription?: CommerceSubscriptionResource;
    confirm: (params: ConfirmCheckoutParams) => Promise<CommerceCheckoutResource>;
    isImmediatePlanChange: boolean;
}

type PreferredSignInStrategy = 'password' | 'otp';
type CaptchaWidgetType = 'smart' | 'invisible' | null;
type CaptchaProvider = 'turnstile';
interface DisplayConfigJSON {
    object: 'display_config';
    id: string;
    after_sign_in_url: string;
    after_sign_out_all_url: string;
    after_sign_out_one_url: string;
    after_sign_up_url: string;
    after_switch_session_url: string;
    application_name: string;
    branded: boolean;
    captcha_public_key: string | null;
    captcha_widget_type: CaptchaWidgetType;
    captcha_public_key_invisible: string | null;
    captcha_provider: CaptchaProvider;
    captcha_oauth_bypass: OAuthStrategy[] | null;
    captcha_heartbeat?: boolean;
    captcha_heartbeat_interval_ms?: number;
    home_url: string;
    instance_environment_type: string;
    logo_image_url: string;
    favicon_image_url: string;
    preferred_sign_in_strategy: PreferredSignInStrategy;
    sign_in_url: string;
    sign_up_url: string;
    support_email: string;
    theme: DisplayThemeJSON;
    user_profile_url: string;
    clerk_js_version?: string;
    organization_profile_url: string;
    create_organization_url: string;
    after_leave_organization_url: string;
    after_create_organization_url: string;
    google_one_tap_client_id?: string;
    show_devmode_warning: boolean;
    terms_url: string;
    privacy_policy_url: string;
    waitlist_url: string;
    after_join_waitlist_url: string;
}
interface DisplayConfigResource extends ClerkResource {
    id: string;
    afterSignInUrl: string;
    afterSignOutAllUrl: string;
    afterSignOutOneUrl: string;
    afterSignUpUrl: string;
    afterSwitchSessionUrl: string;
    applicationName: string;
    backendHost: string;
    branded: boolean;
    captchaPublicKey: string | null;
    captchaWidgetType: CaptchaWidgetType;
    captchaProvider: CaptchaProvider;
    captchaPublicKeyInvisible: string | null;
    /**
     * An array of OAuth strategies for which we will bypass the captcha.
     * We trust that the provider will verify that the user is not a bot on their end.
     * This can also be used to bypass the captcha for a specific OAuth provider on a per-instance basis.
     */
    captchaOauthBypass: OAuthStrategy[];
    captchaHeartbeat: boolean;
    captchaHeartbeatIntervalMs?: number;
    homeUrl: string;
    instanceEnvironmentType: string;
    logoImageUrl: string;
    faviconImageUrl: string;
    preferredSignInStrategy: PreferredSignInStrategy;
    signInUrl: string;
    signUpUrl: string;
    supportEmail: string;
    theme: DisplayThemeJSON;
    userProfileUrl: string;
    clerkJSVersion?: string;
    experimental__forceOauthFirst?: boolean;
    organizationProfileUrl: string;
    createOrganizationUrl: string;
    afterLeaveOrganizationUrl: string;
    afterCreateOrganizationUrl: string;
    googleOneTapClientId?: string;
    showDevModeWarning: boolean;
    termsUrl: string;
    privacyPolicyUrl: string;
    waitlistUrl: string;
    afterJoinWaitlistUrl: string;
    __internal_toSnapshot: () => DisplayConfigJSONSnapshot;
}

interface OrganizationDomainVerification {
    status: OrganizationDomainVerificationStatus;
    strategy: 'email_code';
    attempts: number;
    expiresAt: Date;
}
/**
 * @inline
 */
type OrganizationDomainVerificationStatus = 'unverified' | 'verified';
/**
 * @inline
 */
type OrganizationEnrollmentMode = 'manual_invitation' | 'automatic_invitation' | 'automatic_suggestion';
/**
 * The `OrganizationDomain` object is the model around an organization domain.
 * @interface
 */
interface OrganizationDomainResource extends ClerkResource {
    id: string;
    name: string;
    organizationId: string;
    enrollmentMode: OrganizationEnrollmentMode;
    verification: OrganizationDomainVerification | null;
    createdAt: Date;
    updatedAt: Date;
    affiliationEmailAddress: string | null;
    totalPendingInvitations: number;
    totalPendingSuggestions: number;
    prepareAffiliationVerification: (params: PrepareAffiliationVerificationParams) => Promise<OrganizationDomainResource>;
    attemptAffiliationVerification: (params: AttemptAffiliationVerificationParams) => Promise<OrganizationDomainResource>;
    delete: () => Promise<void>;
    updateEnrollmentMode: (params: UpdateEnrollmentModeParams) => Promise<OrganizationDomainResource>;
}
type PrepareAffiliationVerificationParams = {
    affiliationEmailAddress: string;
};
type AttemptAffiliationVerificationParams = {
    code: string;
};
type UpdateEnrollmentModeParams = Pick<OrganizationDomainResource, 'enrollmentMode'> & {
    deletePending?: boolean;
};

declare global {
    /**
     * If you want to provide custom types for the organizationInvitation.publicMetadata
     * object, simply redeclare this rule in the global namespace.
     * Every organizationInvitation object will use the provided type.
     */
    interface OrganizationInvitationPublicMetadata {
        [k: string]: unknown;
    }
    interface OrganizationInvitationPrivateMetadata {
        [k: string]: unknown;
    }
}
/**
 * The `OrganizationInvitation` object is the model around an organization invitation.
 * @interface
 */
interface OrganizationInvitationResource extends ClerkResource {
    id: string;
    emailAddress: string;
    organizationId: string;
    publicMetadata: OrganizationInvitationPublicMetadata;
    role: OrganizationCustomRoleKey;
    status: OrganizationInvitationStatus;
    createdAt: Date;
    updatedAt: Date;
    revoke: () => Promise<OrganizationInvitationResource>;
}
/**
 * @inline
 */
type OrganizationInvitationStatus = 'pending' | 'accepted' | 'revoked' | 'expired';

type SnakeToCamel<T> = T extends `${infer A}_${infer B}` ? `${Uncapitalize<A>}${Capitalize<SnakeToCamel<B>>}` : T extends object ? {
    [K in keyof T as SnakeToCamel<K>]: T[K];
} : T;
type DeepSnakeToCamel<T> = T extends `${infer A}_${infer B}` ? `${Uncapitalize<A>}${Capitalize<DeepSnakeToCamel<B>>}` : T extends object ? {
    [K in keyof T as DeepSnakeToCamel<K>]: DeepSnakeToCamel<T[K]>;
} : T;
type DeepCamelToSnake<T> = T extends `${infer C0}${infer R}` ? `${C0 extends Uppercase<C0> ? '_' : ''}${Lowercase<C0>}${DeepCamelToSnake<R>}` : T extends object ? {
    [K in keyof T as DeepCamelToSnake<Extract<K, string>>]: DeepCamelToSnake<T[K]>;
} : T;
type CamelToSnake<T> = T extends `${infer C0}${infer R}` ? `${C0 extends Uppercase<C0> ? '_' : ''}${Lowercase<C0>}${CamelToSnake<R>}` : T extends object ? {
    [K in keyof T as CamelToSnake<Extract<K, string>>]: T[K];
} : T;
/**
 * @internal
 */
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
type DeepRequired<T> = Required<{
    [P in keyof T]: T[P] extends object | undefined ? DeepRequired<Required<T[P]>> : T[P];
}>;
type Nullable<T, K extends keyof T> = {
    [P in keyof T]: P extends K ? T[P] | null : T[P];
};
/**
 * Internal type used by RecordToPath
 */
type PathImpl<T, Key extends keyof T> = Key extends string ? T[Key] extends Record<string, any> ? `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], keyof any[]>> & string}` | `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}` : never : never;
/**
 * Internal type used by RecordToPath
 */
type PathImpl2<T> = PathImpl<T, keyof T> | keyof T;
/**
 * Used to construct a type union containing all the keys (even if nested) of an object defined as const
 * const obj =  { a: { b: '' }, c: '' }  as const;
 * type Paths = RecordToPath<typeof obj>
 * Paths contains: 'a' | 'a.b' | 'c'
 */
type RecordToPath<T> = PathImpl2<T> extends string | keyof T ? PathImpl2<T> : keyof T;
/**
 * Used to read the value of a string path inside an object defined as const
 * const obj =  { a: { b: 'hello' }}  as const;
 * type Value = PathValue<typeof obj, 'a.b'>
 * Value is now a union set containing a single type: 'hello'
 */
type PathValue<T, P extends RecordToPath<T>> = P extends `${infer Key}.${infer Rest}` ? Key extends keyof T ? Rest extends RecordToPath<T[Key]> ? PathValue<T[Key], Rest> : never : never : P extends keyof T ? T[P] : never;
type IsSerializable<T> = T extends Function ? false : true;
/**
 * Excludes any non-serializable prop from an object
 * @hidden
 */
type Serializable<T> = {
    [K in keyof T as IsSerializable<T[K]> extends true ? K : never]: T[K];
};
/**
 * Enables autocompletion for a union type, while keeping the ability to use any string
 * or type of `T`
 * @internal
 */
type Autocomplete<U extends T, T = string> = U | (T & Record<never, never>);
/**
 * Omit without union flattening
 * */
type Without<T, W> = {
    [P in keyof T as Exclude<P, W>]: T[P];
};
/**
 * Overrides the type of existing properties
 * const obj =  { a: string, b: number }  as const;
 * type Value = Override<typeof obj, { b: string }>
 * Value contains: { a:string, b: string }
 */
type Override<T, U> = Omit<T, keyof U> & U;

interface VerificationResource extends ClerkResource {
    attempts: number | null;
    error: ClerkAPIError | null;
    expireAt: Date | null;
    externalVerificationRedirectURL: URL | null;
    nonce: string | null;
    message: string | null;
    status: VerificationStatus | null;
    strategy: string | null;
    verifiedAtClient: string | null;
    verifiedFromTheSameClient: () => boolean;
    __internal_toSnapshot: () => VerificationJSONSnapshot;
}
interface PasskeyVerificationResource extends VerificationResource {
    publicKey: PublicKeyCredentialCreationOptionsWithoutExtensions | null;
}
type VerificationStatus = 'unverified' | 'verified' | 'transferable' | 'failed' | 'expired';
interface CodeVerificationAttemptParam {
    code: string;
    signature?: never;
}
interface SignatureVerificationAttemptParam {
    code?: never;
    signature: string;
}
type VerificationAttemptParams = CodeVerificationAttemptParam | SignatureVerificationAttemptParam;
interface StartEmailLinkFlowParams {
    redirectUrl: string;
}
type CreateEmailLinkFlowReturn<Params, Resource> = {
    startEmailLinkFlow: (params: Params) => Promise<Resource>;
    cancelEmailLinkFlow: () => void;
};
interface StartEnterpriseSSOLinkFlowParams {
    redirectUrl: string;
}
type CreateEnterpriseSSOLinkFlowReturn<Params, Resource> = {
    startEnterpriseSSOLinkFlow: (params: Params) => Promise<Resource>;
    cancelEnterpriseSSOLinkFlow: () => void;
};

type UpdatePasskeyJSON = Pick<PasskeyJSON, 'name'>;
type UpdatePasskeyParams = Partial<SnakeToCamel<UpdatePasskeyJSON>>;
interface PasskeyResource extends ClerkResource {
    id: string;
    name: string | null;
    verification: PasskeyVerificationResource | null;
    lastUsedAt: Date | null;
    updatedAt: Date;
    createdAt: Date;
    update: (params: UpdatePasskeyParams) => Promise<PasskeyResource>;
    delete: () => Promise<DeletedObjectResource>;
    __internal_toSnapshot: () => PasskeyJSONSnapshot;
}
type PublicKeyCredentialCreationOptionsWithoutExtensions = Omit<Required<PublicKeyCredentialCreationOptions>, 'extensions'>;
type PublicKeyCredentialRequestOptionsWithoutExtensions = Omit<Required<PublicKeyCredentialRequestOptions>, 'extensions'>;
type PublicKeyCredentialWithAuthenticatorAttestationResponse = Omit<PublicKeyCredential, 'response' | 'getClientExtensionResults'> & {
    response: Omit<AuthenticatorAttestationResponse, 'getAuthenticatorData' | 'getPublicKey' | 'getPublicKeyAlgorithm'>;
};
type PublicKeyCredentialWithAuthenticatorAssertionResponse = Omit<PublicKeyCredential, 'response' | 'getClientExtensionResults'> & {
    response: AuthenticatorAssertionResponse;
};
type CredentialReturn<T> = {
    publicKeyCredential: T;
    error: null;
} | {
    publicKeyCredential: null;
    error: Error;
};

type EmailCodeFactor = {
    strategy: EmailCodeStrategy;
    emailAddressId: string;
    safeIdentifier: string;
    primary?: boolean;
};
type EmailLinkFactor = {
    strategy: EmailLinkStrategy;
    emailAddressId: string;
    safeIdentifier: string;
    primary?: boolean;
};
type PhoneCodeFactor = {
    strategy: PhoneCodeStrategy;
    phoneNumberId: string;
    safeIdentifier: string;
    primary?: boolean;
    default?: boolean;
};
type Web3SignatureFactor = {
    strategy: Web3Strategy;
    web3WalletId: string;
    primary?: boolean;
};
type PasswordFactor = {
    strategy: PasswordStrategy;
};
type PasskeyFactor = {
    strategy: PasskeyStrategy;
};
type OauthFactor = {
    strategy: OAuthStrategy;
};
type SamlFactor = {
    strategy: SamlStrategy;
};
type EnterpriseSSOFactor = {
    strategy: EnterpriseSSOStrategy;
};
type TOTPFactor = {
    strategy: TOTPStrategy;
};
type BackupCodeFactor = {
    strategy: BackupCodeStrategy;
};
type ResetPasswordPhoneCodeFactor = {
    strategy: ResetPasswordPhoneCodeStrategy;
    phoneNumberId: string;
    safeIdentifier: string;
    primary?: boolean;
};
type ResetPasswordEmailCodeFactor = {
    strategy: ResetPasswordEmailCodeStrategy;
    emailAddressId: string;
    safeIdentifier: string;
    primary?: boolean;
};
type ResetPasswordCodeFactor = ResetPasswordEmailCodeFactor | ResetPasswordPhoneCodeFactor;
type ResetPasswordPhoneCodeFactorConfig = Omit<ResetPasswordPhoneCodeFactor, 'safeIdentifier'>;
type ResetPasswordEmailCodeFactorConfig = Omit<ResetPasswordEmailCodeFactor, 'safeIdentifier'>;
type EmailCodeConfig = Omit<EmailCodeFactor, 'safeIdentifier'>;
type EmailLinkConfig = Omit<EmailLinkFactor, 'safeIdentifier'> & {
    redirectUrl: string;
};
type PhoneCodeConfig = Omit<PhoneCodeFactor, 'safeIdentifier'>;
type Web3SignatureConfig = Web3SignatureFactor;
type PassKeyConfig = PasskeyFactor;
type OAuthConfig = OauthFactor & {
    redirectUrl: string;
    actionCompleteRedirectUrl: string;
    oidcPrompt?: string;
    oidcLoginHint?: string;
};
type SamlConfig = SamlFactor & {
    redirectUrl: string;
    actionCompleteRedirectUrl: string;
};
type EnterpriseSSOConfig = EnterpriseSSOFactor & {
    redirectUrl: string;
    actionCompleteRedirectUrl: string;
};
type PhoneCodeSecondFactorConfig = {
    strategy: PhoneCodeStrategy;
    phoneNumberId?: string;
};
type EmailCodeAttempt = {
    strategy: EmailCodeStrategy;
    code: string;
};
type PhoneCodeAttempt = {
    strategy: PhoneCodeStrategy;
    code: string;
};
type PasswordAttempt = {
    strategy: PasswordStrategy;
    password: string;
};
type PasskeyAttempt = {
    strategy: PasskeyStrategy;
    publicKeyCredential: PublicKeyCredentialWithAuthenticatorAssertionResponse;
};
type Web3Attempt = {
    strategy: Web3Strategy;
    signature: string;
};
type TOTPAttempt = {
    strategy: TOTPStrategy;
    code: string;
};
type BackupCodeAttempt = {
    strategy: BackupCodeStrategy;
    code: string;
};
type ResetPasswordPhoneCodeAttempt = {
    strategy: ResetPasswordPhoneCodeStrategy;
    code: string;
    password?: string;
};
type ResetPasswordEmailCodeAttempt = {
    strategy: ResetPasswordEmailCodeStrategy;
    code: string;
    password?: string;
};

interface SessionVerificationResource extends ClerkResource {
    status: SessionVerificationStatus;
    level: SessionVerificationLevel;
    session: SessionResource;
    firstFactorVerification: VerificationResource;
    secondFactorVerification: VerificationResource;
    supportedFirstFactors: SessionVerificationFirstFactor[] | null;
    supportedSecondFactors: SessionVerificationSecondFactor[] | null;
}
type SessionVerificationStatus = 'needs_first_factor' | 'needs_second_factor' | 'complete';
type SessionVerificationTypes = 'strict_mfa' | 'strict' | 'moderate' | 'lax';
type ReverificationConfig = SessionVerificationTypes | {
    level: SessionVerificationLevel;
    afterMinutes: SessionVerificationAfterMinutes;
};
type SessionVerificationLevel = 'first_factor' | 'second_factor' | 'multi_factor';
type SessionVerificationAfterMinutes = number;
type SessionVerificationFirstFactor = EmailCodeFactor | PhoneCodeFactor | PasswordFactor | PasskeyFactor;
type SessionVerificationSecondFactor = PhoneCodeFactor | TOTPFactor | BackupCodeFactor;

interface JWT {
    encoded: {
        header: string;
        payload: string;
        signature: string;
    };
    header: JwtHeader;
    claims: JwtPayload;
}
type NonEmptyArray<T> = [T, ...T[]];
/**
 * @deprecated Use `JwtHeader` instead.
 */
interface JWTHeader {
    alg: string | Algorithm;
    typ?: string;
    cty?: string;
    crit?: NonEmptyArray<Exclude<keyof JWTHeader, 'crit'>>;
    kid?: string;
    jku?: string;
    x5u?: string | string[];
    'x5t#S256'?: string;
    x5t?: string;
    x5c?: string | string[];
}
/**
 * @deprecated Use `JwtPayload` instead.
 */
interface JWTClaims extends ClerkJWTClaims {
    /**
     * Encoded token supporting the `getRawString` method.
     */
    __raw: string;
}
/**
 * Clerk-issued JWT payload
 * @deprecated Use `JwtPayload` instead.
 */
interface ClerkJWTClaims {
    /**
     * JWT Issuer - [RFC7519#section-4.1.1](https://tools.ietf.org/html/rfc7519#section-4.1.1).
     */
    iss: string;
    /**
     * JWT Subject - [RFC7519#section-4.1.2](https://tools.ietf.org/html/rfc7519#section-4.1.2).
     */
    sub: string;
    /**
     * Session ID
     */
    sid: string;
    /**
     * JWT Not Before - [RFC7519#section-4.1.5](https://tools.ietf.org/html/rfc7519#section-4.1.5).
     */
    nbf: number;
    /**
     * JWT Expiration Time - [RFC7519#section-4.1.4](https://tools.ietf.org/html/rfc7519#section-4.1.4).
     */
    exp: number;
    /**
     * JWT Issued At - [RFC7519#section-4.1.6](https://tools.ietf.org/html/rfc7519#section-4.1.6).
     */
    iat: number;
    /**
     * JWT Authorized party - [RFC7800#section-3](https://tools.ietf.org/html/rfc7800#section-3).
     */
    azp?: string;
    /**
     * JWT Actor - [RFC8693](https://www.rfc-editor.org/rfc/rfc8693.html#name-act-actor-claim).
     */
    act?: ActClaim;
    /**
     * Active organization ID.
     */
    org_id?: string;
    /**
     * Active organization slug.
     */
    org_slug?: string;
    /**
     * Active organization role.
     */
    org_role?: OrganizationCustomRoleKey;
    /**
     * Any other JWT Claim Set member.
     */
    [propName: string]: unknown;
}
/**
 * JWT Actor - [RFC8693](https://www.rfc-editor.org/rfc/rfc8693.html#name-act-actor-claim).
 * @inline
 * @deprecated Use `ActClaim` instead.
 */
interface ActJWTClaim {
    sub: string;
    [x: string]: unknown;
}
/**
 * @deprecated This type will be removed in the next major version.
 */
type OrganizationsJWTClaim = Record<string, OrganizationCustomRoleKey>;

interface TokenResource extends ClerkResource {
    jwt?: JWT;
    getRawString: () => string;
    __internal_toSnapshot: () => TokenJSONSnapshot;
}

interface BackupCodeResource extends ClerkResource {
    id: string;
    codes: string[];
    createdAt: Date | null;
    updatedAt: Date | null;
}

interface IdentificationLinkResource extends ClerkResource {
    id: string;
    type: string;
    __internal_toSnapshot(): IdentificationLinkJSONSnapshot;
}

type PrepareEmailAddressVerificationParams = {
    strategy: EmailCodeStrategy;
} | {
    strategy: EmailLinkStrategy | EnterpriseSSOStrategy;
    redirectUrl: string;
};
type AttemptEmailAddressVerificationParams = {
    code: string;
};
interface EmailAddressResource extends ClerkResource {
    id: string;
    emailAddress: string;
    verification: VerificationResource;
    matchesSsoConnection: boolean;
    linkedTo: IdentificationLinkResource[];
    toString: () => string;
    prepareVerification: (params: PrepareEmailAddressVerificationParams) => Promise<EmailAddressResource>;
    attemptVerification: (params: AttemptEmailAddressVerificationParams) => Promise<EmailAddressResource>;
    createEmailLinkFlow: () => CreateEmailLinkFlowReturn<StartEmailLinkFlowParams, EmailAddressResource>;
    createEnterpriseSSOLinkFlow: () => CreateEnterpriseSSOLinkFlowReturn<StartEnterpriseSSOLinkFlowParams, EmailAddressResource>;
    destroy: () => Promise<void>;
    create: () => Promise<EmailAddressResource>;
    __internal_toSnapshot: () => EmailAddressJSONSnapshot;
}

type ReauthorizeExternalAccountParams = {
    additionalScopes?: OAuthScope[];
    redirectUrl?: string;
    oidcPrompt?: string;
    oidcLoginHint?: string;
};
interface ExternalAccountResource extends ClerkResource {
    id: string;
    identificationId: string;
    provider: OAuthProvider;
    providerUserId: string;
    emailAddress: string;
    approvedScopes: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
    username?: string;
    phoneNumber?: string;
    publicMetadata: Record<string, unknown>;
    label?: string;
    verification: VerificationResource | null;
    reauthorize: (params: ReauthorizeExternalAccountParams) => Promise<ExternalAccountResource>;
    destroy: () => Promise<void>;
    providerSlug: () => OAuthProvider;
    providerTitle: () => string;
    accountIdentifier: () => string;
    __internal_toSnapshot: () => ExternalAccountJSONSnapshot;
}

interface ImageResource extends ClerkResource {
    id?: string;
    name: string | null;
    publicUrl: string | null;
}

/**
 * @inline
 */
type OrganizationSuggestionStatus = 'pending' | 'accepted';
/**
 * An interface representing an organization suggestion.
 * @interface
 */
interface OrganizationSuggestionResource extends ClerkResource {
    id: string;
    publicOrganizationData: {
        hasImage: boolean;
        imageUrl: string;
        name: string;
        id: string;
        slug: string | null;
    };
    status: OrganizationSuggestionStatus;
    createdAt: Date;
    updatedAt: Date;
    accept: () => Promise<OrganizationSuggestionResource>;
}

type PhoneNumberVerificationStrategy = PhoneCodeStrategy;
type PreparePhoneNumberVerificationParams = {
    strategy: PhoneNumberVerificationStrategy;
};
type AttemptPhoneNumberVerificationParams = {
    code: string;
};
type SetReservedForSecondFactorParams = {
    reserved: boolean;
};
interface PhoneNumberResource extends ClerkResource {
    id: string;
    phoneNumber: string;
    verification: VerificationResource;
    reservedForSecondFactor: boolean;
    defaultSecondFactor: boolean;
    linkedTo: IdentificationLinkResource[];
    backupCodes?: string[];
    toString: () => string;
    prepareVerification: () => Promise<PhoneNumberResource>;
    attemptVerification: (params: AttemptPhoneNumberVerificationParams) => Promise<PhoneNumberResource>;
    makeDefaultSecondFactor: () => Promise<PhoneNumberResource>;
    setReservedForSecondFactor: (params: SetReservedForSecondFactorParams) => Promise<PhoneNumberResource>;
    destroy: () => Promise<void>;
    create: () => Promise<PhoneNumberResource>;
    __internal_toSnapshot: () => PhoneNumberJSONSnapshot;
}

interface SamlAccountConnectionResource extends ClerkResource {
    id: string;
    name: string;
    domain: string;
    active: boolean;
    provider: string;
    syncUserAttributes: boolean;
    allowSubdomains: boolean;
    allowIdpInitiated: boolean;
    disableAdditionalIdentifications: boolean;
    createdAt: Date;
    updatedAt: Date;
    __internal_toSnapshot: () => SamlAccountConnectionJSONSnapshot;
}

interface SamlAccountResource extends ClerkResource {
    provider: SamlIdpSlug;
    providerUserId: string | null;
    active: boolean;
    emailAddress: string;
    firstName: string;
    lastName: string;
    verification: VerificationResource | null;
    samlConnection: SamlAccountConnectionResource | null;
    __internal_toSnapshot: () => SamlAccountJSONSnapshot;
}

interface TOTPResource extends ClerkResource {
    id: string;
    secret?: string;
    uri?: string;
    verified: boolean;
    backupCodes?: string[];
    createdAt: Date | null;
    updatedAt: Date | null;
}

declare global {
    /**
     * If you want to provide custom types for the organizationInvitation.publicMetadata
     * object, simply redeclare this rule in the global namespace.
     * Every organizationInvitation object will use the provided type.
     */
    interface UserOrganizationInvitationPublicMetadata {
        [k: string]: unknown;
    }
    interface UserOrganizationInvitationPrivateMetadata {
        [k: string]: unknown;
    }
}
/**
 * The `OrganizationInvitation` object is the model around an organization invitation.
 * @interface
 */
interface UserOrganizationInvitationResource extends ClerkResource {
    id: string;
    emailAddress: string;
    publicOrganizationData: {
        hasImage: boolean;
        imageUrl: string;
        name: string;
        id: string;
        slug: string | null;
    };
    publicMetadata: UserOrganizationInvitationPublicMetadata;
    role: OrganizationCustomRoleKey;
    status: OrganizationInvitationStatus;
    createdAt: Date;
    updatedAt: Date;
    accept: () => Promise<UserOrganizationInvitationResource>;
}

type PrepareWeb3WalletVerificationParams = {
    strategy: Web3Strategy;
};
type AttemptWeb3WalletVerificationParams = {
    signature: string;
    strategy?: Web3Strategy;
};
interface Web3WalletResource extends ClerkResource {
    id: string;
    web3Wallet: string;
    verification: VerificationResource;
    toString: () => string;
    prepareVerification: (params: PrepareWeb3WalletVerificationParams) => Promise<Web3WalletResource>;
    attemptVerification: (params: AttemptWeb3WalletVerificationParams) => Promise<Web3WalletResource>;
    destroy: () => Promise<void>;
    create: () => Promise<Web3WalletResource>;
    __internal_toSnapshot: () => Web3WalletJSONSnapshot;
}
type GenerateSignature = (opts: GenerateSignatureParams) => Promise<string>;
interface AuthenticateWithWeb3Params {
    identifier: string;
    generateSignature: GenerateSignature;
    strategy?: Web3Strategy;
}
interface GenerateSignatureParams {
    identifier: string;
    nonce: string;
    provider?: Web3Provider;
}

declare global {
    /**
     * If you want to provide custom types for the user.publicMetadata object,
     * simply redeclare this rule in the global namespace.
     * Every user object will use the provided type.
     */
    interface UserPublicMetadata {
        [k: string]: unknown;
    }
    /**
     * If you want to provide custom types for the user.privateMetadata object,
     * simply redeclare this rule in the global namespace.
     * Every user object will use the provided type.
     */
    interface UserPrivateMetadata {
        [k: string]: unknown;
    }
    /**
     * If you want to provide custom types for the user.unsafeMetadata object,
     * simply redeclare this rule in the global namespace.
     * Every user object will use the provided type.
     */
    interface UserUnsafeMetadata {
        [k: string]: unknown;
    }
}
/**
 * The `User` object holds all of the information for a single user of your application and provides a set of methods to manage their account. Each `User` has at least one authentication [identifier](https://clerk.com/docs/authentication/configuration/sign-up-sign-in-options#identifiers), which might be their email address, phone number, or a username.
 *
 * A user can be contacted at their primary email address or primary phone number. They can have more than one registered email address, but only one of them will be their primary email address. This goes for phone numbers as well; a user can have more than one, but only one phone number will be their primary. At the same time, a user can also have one or more external accounts by connecting to [social providers](https://clerk.com/docs/authentication/social-connections/oauth) such as Google, Apple, Facebook, and many more.
 *
 * Finally, a `User` object holds profile data like the user's name, profile picture, and a set of [metadata](/docs/users/metadata) that can be used internally to store arbitrary information. The metadata are split into `publicMetadata` and `privateMetadata`. Both types are set from the [Backend API](https://clerk.com/docs/reference/backend-api){{ target: '_blank' }}, but public metadata can also be accessed from the [Frontend API](https://clerk.com/docs/reference/frontend-api){{ target: '_blank' }}.
 *
 * The ClerkJS SDK provides some helper [methods](#methods) on the `User` object to help retrieve and update user information and authentication status.
 */
interface UserResource extends ClerkResource, CommercePaymentSourceMethods {
    id: string;
    externalId: string | null;
    primaryEmailAddressId: string | null;
    primaryEmailAddress: EmailAddressResource | null;
    primaryPhoneNumberId: string | null;
    primaryPhoneNumber: PhoneNumberResource | null;
    primaryWeb3WalletId: string | null;
    primaryWeb3Wallet: Web3WalletResource | null;
    username: string | null;
    fullName: string | null;
    firstName: string | null;
    lastName: string | null;
    imageUrl: string;
    hasImage: boolean;
    emailAddresses: EmailAddressResource[];
    phoneNumbers: PhoneNumberResource[];
    web3Wallets: Web3WalletResource[];
    externalAccounts: ExternalAccountResource[];
    enterpriseAccounts: EnterpriseAccountResource[];
    passkeys: PasskeyResource[];
    /**
     * @deprecated Use `enterpriseAccounts` instead.
     */
    samlAccounts: SamlAccountResource[];
    organizationMemberships: OrganizationMembershipResource[];
    passwordEnabled: boolean;
    totpEnabled: boolean;
    backupCodeEnabled: boolean;
    twoFactorEnabled: boolean;
    publicMetadata: UserPublicMetadata;
    unsafeMetadata: UserUnsafeMetadata;
    lastSignInAt: Date | null;
    createOrganizationEnabled: boolean;
    createOrganizationsLimit: number | null;
    deleteSelfEnabled: boolean;
    updatedAt: Date | null;
    createdAt: Date | null;
    update: (params: UpdateUserParams) => Promise<UserResource>;
    delete: () => Promise<void>;
    updatePassword: (params: UpdateUserPasswordParams) => Promise<UserResource>;
    removePassword: (params: RemoveUserPasswordParams) => Promise<UserResource>;
    createEmailAddress: (params: CreateEmailAddressParams) => Promise<EmailAddressResource>;
    createPasskey: () => Promise<PasskeyResource>;
    createPhoneNumber: (params: CreatePhoneNumberParams) => Promise<PhoneNumberResource>;
    createWeb3Wallet: (params: CreateWeb3WalletParams) => Promise<Web3WalletResource>;
    isPrimaryIdentification: (ident: EmailAddressResource | PhoneNumberResource | Web3WalletResource) => boolean;
    getSessions: () => Promise<SessionWithActivitiesResource[]>;
    setProfileImage: (params: SetProfileImageParams) => Promise<ImageResource>;
    createExternalAccount: (params: CreateExternalAccountParams) => Promise<ExternalAccountResource>;
    getOrganizationMemberships: GetOrganizationMemberships;
    getOrganizationInvitations: (params?: GetUserOrganizationInvitationsParams) => Promise<ClerkPaginatedResponse<UserOrganizationInvitationResource>>;
    getOrganizationSuggestions: (params?: GetUserOrganizationSuggestionsParams) => Promise<ClerkPaginatedResponse<OrganizationSuggestionResource>>;
    leaveOrganization: (organizationId: string) => Promise<DeletedObjectResource>;
    createTOTP: () => Promise<TOTPResource>;
    verifyTOTP: (params: VerifyTOTPParams) => Promise<TOTPResource>;
    disableTOTP: () => Promise<DeletedObjectResource>;
    createBackupCode: () => Promise<BackupCodeResource>;
    get verifiedExternalAccounts(): ExternalAccountResource[];
    get unverifiedExternalAccounts(): ExternalAccountResource[];
    get verifiedWeb3Wallets(): Web3WalletResource[];
    get hasVerifiedEmailAddress(): boolean;
    get hasVerifiedPhoneNumber(): boolean;
    __internal_toSnapshot: () => UserJSONSnapshot;
}
type CreateEmailAddressParams = {
    email: string;
};
type CreatePhoneNumberParams = {
    phoneNumber: string;
};
type CreateWeb3WalletParams = {
    web3Wallet: string;
};
type SetProfileImageParams = {
    file: Blob | File | string | null;
};
type CreateExternalAccountParams = {
    strategy: OAuthStrategy;
    redirectUrl?: string;
    additionalScopes?: OAuthScope[];
    oidcPrompt?: string;
    oidcLoginHint?: string;
};
type VerifyTOTPParams = {
    code: string;
};
type UpdateUserJSON = Pick<UserJSON, 'username' | 'first_name' | 'last_name' | 'primary_email_address_id' | 'primary_phone_number_id' | 'primary_web3_wallet_id' | 'unsafe_metadata'>;
type UpdateUserParams = Partial<SnakeToCamel<UpdateUserJSON>>;
type UpdateUserPasswordParams = {
    newPassword: string;
    currentPassword?: string;
    signOutOfOtherSessions?: boolean;
};
type RemoveUserPasswordParams = Pick<UpdateUserPasswordParams, 'currentPassword'>;
type GetUserOrganizationInvitationsParams = ClerkPaginationParams<{
    status?: OrganizationInvitationStatus;
}>;
type GetUserOrganizationSuggestionsParams = ClerkPaginationParams<{
    status?: OrganizationSuggestionStatus | OrganizationSuggestionStatus[];
}>;
type GetUserOrganizationMembershipParams = ClerkPaginationParams;
type GetOrganizationMemberships = (params?: GetUserOrganizationMembershipParams) => Promise<ClerkPaginatedResponse<OrganizationMembershipResource>>;

/**
 * @inline
 */
type PendingSessionOptions = {
    /**
     * A boolean that indicates whether pending sessions are considered as signed out or not.
     * @default true
     */
    treatPendingAsSignedOut?: boolean;
};
type DisallowSystemPermissions<P extends string> = P extends `${OrganizationSystemPermissionPrefix}${string}` ? 'System permissions are not included in session claims and cannot be used on the server-side' : P;
/** @inline */
type CheckAuthorizationFn<Params> = (isAuthorizedParams: Params) => boolean;
/** @inline */
type CheckAuthorizationWithCustomPermissions = CheckAuthorizationFn<CheckAuthorizationParamsWithCustomPermissions>;
type WithReverification<T> = T & {
    reverification?: ReverificationConfig;
};
type CheckAuthorizationParamsWithCustomPermissions = WithReverification<{
    role: OrganizationCustomRoleKey;
    permission?: never;
    feature?: never;
    plan?: never;
} | {
    role?: never;
    permission: OrganizationCustomPermissionKey;
    feature?: never;
    plan?: never;
} | {
    role?: never;
    permission?: never;
    feature: Autocomplete<`user:${string}` | `org:${string}`>;
    plan?: never;
} | {
    role?: never;
    permission?: never;
    feature?: never;
    plan: Autocomplete<`user:${string}` | `org:${string}`>;
} | {
    role?: never;
    permission?: never;
    feature?: never;
    plan?: never;
}>;
type CheckAuthorization = CheckAuthorizationFn<CheckAuthorizationParams>;
type CheckAuthorizationParams = WithReverification<{
    role: OrganizationCustomRoleKey;
    permission?: never;
    feature?: never;
    plan?: never;
} | {
    role?: never;
    permission: OrganizationPermissionKey;
    feature?: never;
    plan?: never;
} | {
    role?: never;
    permission?: never;
    feature: Autocomplete<`user:${string}` | `org:${string}`>;
    plan?: never;
} | {
    role?: never;
    permission?: never;
    feature?: never;
    plan: Autocomplete<`user:${string}` | `org:${string}`>;
} | {
    role?: never;
    permission?: never;
    feature?: never;
    plan?: never;
}>;
/**
 * Type guard for server-side authorization checks using session claims.
 * System permissions are not allowed since they are not included
 * in session claims and cannot be verified on the server side.
 */
type CheckAuthorizationFromSessionClaims = <P extends OrganizationCustomPermissionKey>(isAuthorizedParams: CheckAuthorizationParamsFromSessionClaims<P>) => boolean;
type CheckAuthorizationParamsFromSessionClaims<P extends OrganizationCustomPermissionKey> = WithReverification<{
    role: OrganizationCustomRoleKey;
    permission?: never;
    feature?: never;
    plan?: never;
} | {
    role?: never;
    permission: DisallowSystemPermissions<P>;
    feature?: never;
    plan?: never;
} | {
    role?: never;
    permission?: never;
    feature: Autocomplete<`user:${string}` | `org:${string}`>;
    plan?: never;
} | {
    role?: never;
    permission?: never;
    feature?: never;
    plan: Autocomplete<`user:${string}` | `org:${string}`>;
} | {
    role?: never;
    permission?: never;
    feature?: never;
    plan?: never;
}>;
/**
 * The `Session` object is an abstraction over an HTTP session. It models the period of information exchange between a user and the server.
 *
 * The `Session` object includes methods for recording session activity and ending the session client-side. For security reasons, sessions can also expire server-side.
 *
 * As soon as a [`User`](https://clerk.com/docs/references/javascript/user) signs in, Clerk creates a `Session` for the current [`Client`](https://clerk.com/docs/references/javascript/client). Clients can have more than one sessions at any point in time, but only one of those sessions will be **active**.
 *
 * In certain scenarios, a session might be replaced by another one. This is often the case with [multi-session applications](https://clerk.com/docs/authentication/configuration/session-options#multi-session-applications).
 *
 * All sessions that are **expired**, **removed**, **replaced**, **ended** or **abandoned** are not considered valid.
 *
 * > [!NOTE]
 * > For more information regarding the different session states, see the [guide on session management](https://clerk.com/docs/authentication/configuration/session-options).
 */
interface SessionResource extends ClerkResource {
    /**
     * The unique identifier for the session.
     */
    id: string;
    /**
     * The current state of the session.
     */
    status: SessionStatus;
    expireAt: Date;
    abandonAt: Date;
    /**
     * An array where each item represents the number of minutes since the last verification of a first or second factor: `[firstFactorAge, secondFactorAge]`.
     */
    factorVerificationAge: [firstFactorAge: number, secondFactorAge: number] | null;
    lastActiveToken: TokenResource | null;
    lastActiveOrganizationId: string | null;
    lastActiveAt: Date;
    actor: ActClaim | null;
    tasks: Array<SessionTask> | null;
    currentTask?: SessionTask;
    /**
     * The user associated with the session.
     */
    user: UserResource | null;
    publicUserData: PublicUserData;
    /**
     * Marks the session as ended. The session will no longer be active for this `Client` and its status will become **ended**.
     */
    end: () => Promise<SessionResource>;
    remove: () => Promise<SessionResource>;
    touch: () => Promise<SessionResource>;
    getToken: GetToken;
    checkAuthorization: CheckAuthorization;
    clearCache: () => void;
    createdAt: Date;
    updatedAt: Date;
    startVerification: (params: SessionVerifyCreateParams) => Promise<SessionVerificationResource>;
    prepareFirstFactorVerification: (factor: SessionVerifyPrepareFirstFactorParams) => Promise<SessionVerificationResource>;
    attemptFirstFactorVerification: (attemptFactor: SessionVerifyAttemptFirstFactorParams) => Promise<SessionVerificationResource>;
    prepareSecondFactorVerification: (params: SessionVerifyPrepareSecondFactorParams) => Promise<SessionVerificationResource>;
    attemptSecondFactorVerification: (params: SessionVerifyAttemptSecondFactorParams) => Promise<SessionVerificationResource>;
    verifyWithPasskey: () => Promise<SessionVerificationResource>;
    __internal_toSnapshot: () => SessionJSONSnapshot;
}
/**
 * Represents a session resource that has completed all pending tasks
 * and authentication factors
 */
interface ActiveSessionResource extends SessionResource {
    status: 'active';
    user: UserResource;
}
/**
 * Represents a session resource that has completed sign-in but has pending tasks
 */
interface PendingSessionResource extends SessionResource {
    status: 'pending';
    user: UserResource;
    currentTask: SessionTask;
}
/**
 * Represents session resources for users who have completed
 * the full sign-in flow
 */
type SignedInSessionResource = ActiveSessionResource | PendingSessionResource;
interface SessionWithActivitiesResource extends ClerkResource {
    id: string;
    status: string;
    expireAt: Date;
    abandonAt: Date;
    lastActiveAt: Date;
    latestActivity: SessionActivity;
    actor: ActClaim | null;
    revoke: () => Promise<SessionWithActivitiesResource>;
}
interface SessionActivity {
    id: string;
    browserName?: string;
    browserVersion?: string;
    deviceType?: string;
    ipAddress?: string;
    city?: string;
    country?: string;
    isMobile?: boolean;
}
type SessionStatus = 'abandoned' | 'active' | 'ended' | 'expired' | 'removed' | 'replaced' | 'revoked' | 'pending';
interface PublicUserData {
    firstName: string | null;
    lastName: string | null;
    imageUrl: string;
    hasImage: boolean;
    identifier: string;
    userId?: string;
}
interface SessionTask {
    key: 'org';
}
type GetTokenOptions = {
    template?: string;
    organizationId?: string;
    leewayInSeconds?: number;
    skipCache?: boolean;
};
/**
 * @inline
 */
type GetToken = (options?: GetTokenOptions) => Promise<string | null>;
type SessionVerifyCreateParams = {
    level: SessionVerificationLevel;
};
type SessionVerifyPrepareFirstFactorParams = EmailCodeConfig | PhoneCodeConfig | PassKeyConfig;
type SessionVerifyAttemptFirstFactorParams = EmailCodeAttempt | PhoneCodeAttempt | PasswordAttempt | PasskeyAttempt;
type SessionVerifyPrepareSecondFactorParams = PhoneCodeSecondFactorConfig;
type SessionVerifyAttemptSecondFactorParams = PhoneCodeAttempt | TOTPAttempt | BackupCodeAttempt;

/**
 * The `OrganizationMembershipRequest` object is the model that describes the request of a user to join an organization.
 * @interface
 */
interface OrganizationMembershipRequestResource extends ClerkResource {
    id: string;
    organizationId: string;
    status: OrganizationInvitationStatus;
    publicUserData: PublicUserData;
    createdAt: Date;
    updatedAt: Date;
    accept: () => Promise<OrganizationMembershipRequestResource>;
    reject: () => Promise<OrganizationMembershipRequestResource>;
}

interface PermissionResource extends ClerkResource {
    id: string;
    key: string;
    name: string;
    type: 'system' | 'user';
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

interface RoleResource extends ClerkResource {
    id: string;
    key: string;
    name: string;
    description: string;
    permissions: PermissionResource[];
    createdAt: Date;
    updatedAt: Date;
}

declare global {
    /**
     * If you want to provide custom types for the organization.publicMetadata object,
     * simply redeclare this rule in the global namespace.
     * Every organization object will use the provided type.
     */
    interface OrganizationPublicMetadata {
        [k: string]: unknown;
    }
    /**
     * If you want to provide custom types for the organization.privateMetadata object,
     * simply redeclare this rule in the global namespace.
     * Every organization object will use the provided type.
     */
    interface OrganizationPrivateMetadata {
        [k: string]: unknown;
    }
}
/**
 * The `Organization` object holds information about an organization, as well as methods for managing it.
 *
 * To use these methods, you must have the **Organizations** feature [enabled in your app's settings in the Clerk Dashboard](https://clerk.com/docs/organizations/overview#enable-organizations-in-your-application).
 *
 * @interface
 */
interface OrganizationResource extends ClerkResource, CommercePaymentSourceMethods {
    id: string;
    name: string;
    slug: string | null;
    imageUrl: string;
    hasImage: boolean;
    membersCount: number;
    pendingInvitationsCount: number;
    publicMetadata: OrganizationPublicMetadata;
    adminDeleteEnabled: boolean;
    maxAllowedMemberships: number;
    createdAt: Date;
    updatedAt: Date;
    update: (params: UpdateOrganizationParams) => Promise<OrganizationResource>;
    getMemberships: GetMemberships;
    getInvitations: (params?: GetInvitationsParams) => Promise<ClerkPaginatedResponse<OrganizationInvitationResource>>;
    getRoles: (params?: GetRolesParams) => Promise<ClerkPaginatedResponse<RoleResource>>;
    getDomains: (params?: GetDomainsParams) => Promise<ClerkPaginatedResponse<OrganizationDomainResource>>;
    getMembershipRequests: (params?: GetMembershipRequestParams) => Promise<ClerkPaginatedResponse<OrganizationMembershipRequestResource>>;
    getSubscriptions: (params?: GetSubscriptionsParams) => Promise<ClerkPaginatedResponse<CommerceSubscriptionResource>>;
    addMember: (params: AddMemberParams) => Promise<OrganizationMembershipResource>;
    inviteMember: (params: InviteMemberParams) => Promise<OrganizationInvitationResource>;
    inviteMembers: (params: InviteMembersParams) => Promise<OrganizationInvitationResource[]>;
    updateMember: (params: UpdateMembershipParams) => Promise<OrganizationMembershipResource>;
    removeMember: (userId: string) => Promise<OrganizationMembershipResource>;
    createDomain: (domainName: string) => Promise<OrganizationDomainResource>;
    getDomain: ({ domainId }: {
        domainId: string;
    }) => Promise<OrganizationDomainResource>;
    destroy: () => Promise<void>;
    setLogo: (params: SetOrganizationLogoParams) => Promise<OrganizationResource>;
    __internal_toSnapshot: () => OrganizationJSONSnapshot;
}
type GetRolesParams = ClerkPaginationParams;
type GetMembersParams = ClerkPaginationParams<{
    role?: OrganizationCustomRoleKey[];
    query?: string;
}>;
type GetDomainsParams = ClerkPaginationParams<{
    enrollmentMode?: OrganizationEnrollmentMode;
}>;
type GetInvitationsParams = ClerkPaginationParams<{
    status?: OrganizationInvitationStatus[];
}>;
type GetMembershipRequestParams = ClerkPaginationParams<{
    status?: OrganizationInvitationStatus;
}>;
interface AddMemberParams {
    userId: string;
    role: OrganizationCustomRoleKey;
}
interface InviteMemberParams {
    emailAddress: string;
    role: OrganizationCustomRoleKey;
}
interface InviteMembersParams {
    emailAddresses: string[];
    role: OrganizationCustomRoleKey;
}
interface UpdateMembershipParams {
    userId: string;
    role: OrganizationCustomRoleKey;
}
interface UpdateOrganizationParams {
    name: string;
    slug?: string;
}
interface SetOrganizationLogoParams {
    file: Blob | File | string | null;
}
type GetMemberships = (params?: GetMembersParams) => Promise<ClerkPaginatedResponse<OrganizationMembershipResource>>;

interface Base {
    permission: string;
    role: string;
}
interface Placeholder {
    permission: unknown;
    role: unknown;
}
declare global {
    interface ClerkAuthorization {
    }
}
declare global {
    /**
     * If you want to provide custom types for the organizationMembership.publicMetadata
     * object, simply redeclare this rule in the global namespace.
     * Every organizationMembership object will use the provided type.
     */
    interface OrganizationMembershipPublicMetadata {
        [k: string]: unknown;
    }
    /**
     * If you want to provide custom types for the organizationMembership.publicMetadata
     * object, simply redeclare this rule in the global namespace.
     * Every organizationMembership object will use the provided type.
     */
    interface OrganizationMembershipPrivateMetadata {
        [k: string]: unknown;
    }
}
/**
 * The `OrganizationMembership` object is the model around an organization membership entity and describes the relationship between users and organizations.
 * @interface
 */
interface OrganizationMembershipResource extends ClerkResource {
    id: string;
    organization: OrganizationResource;
    permissions: OrganizationPermissionKey[];
    publicMetadata: OrganizationMembershipPublicMetadata;
    publicUserData: PublicUserData;
    role: OrganizationCustomRoleKey;
    createdAt: Date;
    updatedAt: Date;
    destroy: () => Promise<OrganizationMembershipResource>;
    update: (updateParams: UpdateOrganizationMembershipParams) => Promise<OrganizationMembershipResource>;
    /**
     * @internal
     */
    __internal_toSnapshot: () => OrganizationMembershipJSONSnapshot;
}
type OrganizationCustomPermissionKey = ClerkAuthorization extends Placeholder ? ClerkAuthorization['permission'] extends string ? ClerkAuthorization['permission'] : Base['permission'] : Base['permission'];
/**
 * `OrganizationCustomRoleKey` is a type that represents the user's role in an organization. It will be string unless the developer has provided their own types through [`ClerkAuthorization`](https://clerk.com/docs/guides/custom-types#example-custom-roles-and-permissions).
 *
 * Clerk provides the [default roles](https://clerk.com/docs/organizations/roles-permissions#default-roles) `org:admin` and `org:member`. However, you can create [custom roles](https://clerk.com/docs/organizations/create-roles-permissions) as well.
 *
 * @interface
 */
type OrganizationCustomRoleKey = ClerkAuthorization extends Placeholder ? ClerkAuthorization['role'] extends string ? ClerkAuthorization['role'] : Base['role'] : Base['role'];
type OrganizationSystemPermissionPrefix = 'org:sys_';
type OrganizationSystemPermissionKey = `${OrganizationSystemPermissionPrefix}domains:manage` | `${OrganizationSystemPermissionPrefix}profile:manage` | `${OrganizationSystemPermissionPrefix}profile:delete` | `${OrganizationSystemPermissionPrefix}memberships:read` | `${OrganizationSystemPermissionPrefix}memberships:manage` | `${OrganizationSystemPermissionPrefix}domains:read`;
/**
 * OrganizationPermissionKey is a combination of system and custom permissions.
 * System permissions are only accessible from FAPI and client-side operations/utils
 */
type OrganizationPermissionKey = ClerkAuthorization extends Placeholder ? ClerkAuthorization['permission'] extends string ? ClerkAuthorization['permission'] | OrganizationSystemPermissionKey : Autocomplete<OrganizationSystemPermissionKey> : Autocomplete<OrganizationSystemPermissionKey>;
type UpdateOrganizationMembershipParams = {
    role: OrganizationCustomRoleKey;
};

interface Jwt {
    header: JwtHeader;
    payload: JwtPayload;
    signature: Uint8Array;
    raw: {
        header: string;
        payload: string;
        signature: string;
        text: string;
    };
}
interface JwtHeader {
    alg: string;
    typ?: string;
    cty?: string;
    crit?: Array<string | Exclude<keyof JwtHeader, 'crit'>>;
    kid: string;
    jku?: string;
    x5u?: string | string[];
    'x5t#S256'?: string;
    x5t?: string;
    x5c?: string | string[];
}
declare global {
    /**
     * If you want to provide custom types for the getAuth().sessionClaims object,
     * simply redeclare this interface in the global namespace and provide your own custom keys.
     */
    interface CustomJwtSessionClaims {
        [k: string]: unknown;
    }
}
type JWTPayloadBase = {
    /**
     * Encoded token supporting the `getRawString` method.
     */
    __raw: string;
    /**
     * JWT Issuer - [RFC7519#section-4.1.1](https://tools.ietf.org/html/rfc7519#section-4.1.1).
     */
    iss: string;
    /**
     * JWT Subject - [RFC7519#section-4.1.2](https://tools.ietf.org/html/rfc7519#section-4.1.2).
     */
    sub: string;
    /**
     * Session ID
     */
    sid: string;
    /**
     * JWT Not Before - [RFC7519#section-4.1.5](https://tools.ietf.org/html/rfc7519#section-4.1.5).
     */
    nbf: number;
    /**
     * JWT Expiration Time - [RFC7519#section-4.1.4](https://tools.ietf.org/html/rfc7519#section-4.1.4).
     */
    exp: number;
    /**
     * JWT Issued At - [RFC7519#section-4.1.6](https://tools.ietf.org/html/rfc7519#section-4.1.6).
     */
    iat: number;
    /**
     * JWT Authorized party - [RFC7800#section-3](https://tools.ietf.org/html/rfc7800#section-3).
     */
    azp?: string;
    /**
     * JWT Actor - [RFC8693](https://www.rfc-editor.org/rfc/rfc8693.html#name-act-actor-claim).
     */
    act?: ActClaim;
    /**
     * Factor verification age (fva). The tuple represents the minutes that have passed since the last time a first or second factor were verified.
     * This API is experimental and may change at any moment.
     * @experimental
     */
    fva?: [fistFactorAge: number, secondFactorAge: number];
    /**
     * Session status
     */
    sts?: SessionStatusClaim;
    /**
     * Any other JWT Claim Set member.
     */
    [propName: string]: unknown;
};
type VersionedJwtPayload = {
    v?: undefined;
    /**
     *
     * Active organization permissions.
     */
    org_permissions?: OrganizationCustomPermissionKey[];
    /**
     * Active organization ID.
     */
    org_id?: string;
    /**
     * Active organization slug.
     */
    org_slug?: string;
    /**
     * Active organization role.
     */
    org_role?: OrganizationCustomRoleKey;
} | {
    /**
     * @experimental
     *
     * The version of the JWT payload.
     */
    v: 2;
    /**
     * Features for session.
     */
    fea?: string;
    /**
     * Plans for session.
     */
    pla?: string;
    /**
     * @experimental - This structure is subject to change.
     *
     * Active organization information.
     */
    o?: {
        /**
         * Active organization ID.
         */
        id: string;
        /**
         * Active organization slug.
         */
        slg?: string;
        /**
         * Active organization role.
         */
        rol?: OrganizationCustomRoleKey;
        /**
         * Active organization permissions.
         */
        per?: string;
        /**
         * Feature mapping.
         */
        fpm?: string;
    };
    org_permissions?: never;
    org_id?: never;
    org_slug?: never;
    org_role?: never;
};
type JwtPayload = JWTPayloadBase & CustomJwtSessionClaims & VersionedJwtPayload;
/**
 * JWT Actor - [RFC8693](https://www.rfc-editor.org/rfc/rfc8693.html#name-act-actor-claim).
 * @inline
 */
interface ActClaim {
    sub: string;
    [x: string]: unknown;
}
/**
 * Session status
 */
type SessionStatusClaim = Extract<SessionStatus, 'active' | 'pending'>;

interface OrganizationSettingsJSON extends ClerkResourceJSON {
    id: never;
    object: never;
    enabled: boolean;
    max_allowed_memberships: number;
    force_organization_selection: boolean;
    actions: {
        admin_delete: boolean;
    };
    domains: {
        enabled: boolean;
        enrollment_modes: OrganizationEnrollmentMode[];
        default_role: string | null;
    };
}
interface OrganizationSettingsResource extends ClerkResource {
    enabled: boolean;
    maxAllowedMemberships: number;
    forceOrganizationSelection: boolean;
    actions: {
        adminDelete: boolean;
    };
    domains: {
        enabled: boolean;
        enrollmentModes: OrganizationEnrollmentMode[];
        defaultRole: string | null;
    };
    __internal_toSnapshot: () => OrganizationSettingsJSONSnapshot;
}

type UsernameIdentifier = 'username';
type EmailAddressIdentifier = 'email_address';
type PhoneNumberIdentifier = 'phone_number';
type Web3WalletIdentifier = 'web3_wallet';
type EmailAddressOrPhoneNumberIdentifier = 'email_address_or_phone_number';

type Attribute = 'email_address' | 'phone_number' | 'username' | 'first_name' | 'last_name' | 'password' | 'web3_wallet' | 'authenticator_app' | 'backup_code' | 'passkey';
type VerificationStrategy = 'email_link' | 'email_code' | 'phone_code' | 'totp' | 'backup_code';
type OAuthProviderSettings = {
    enabled: boolean;
    required: boolean;
    authenticatable: boolean;
    strategy: OAuthStrategy;
    name: string;
    logo_url: string | null;
};
type AttributeDataJSON = {
    enabled: boolean;
    required: boolean;
    verifications: VerificationStrategy[];
    used_for_first_factor: boolean;
    first_factors: VerificationStrategy[];
    used_for_second_factor: boolean;
    second_factors: VerificationStrategy[];
    verify_at_sign_up: boolean;
};
type AttributeData = AttributeDataJSON & {
    name: Attribute;
};
type SignInData = {
    second_factor: {
        required: boolean;
        enabled: boolean;
    };
};
type SignUpModes = 'public' | 'restricted' | 'waitlist';
type SignUpData = {
    allowlist_only: boolean;
    progressive: boolean;
    captcha_enabled: boolean;
    mode: SignUpModes;
    legal_consent_enabled: boolean;
};
type PasswordSettingsData = {
    allowed_special_characters: string;
    disable_hibp: boolean;
    min_length: number;
    max_length: number;
    require_special_char: boolean;
    require_numbers: boolean;
    require_uppercase: boolean;
    require_lowercase: boolean;
    show_zxcvbn: boolean;
    min_zxcvbn_strength: number;
};
type UsernameSettingsData = {
    min_length: number;
    max_length: number;
};
type PasskeySettingsData = {
    allow_autofill: boolean;
    show_sign_in_button: boolean;
};
type OAuthProviders = {
    [provider in OAuthStrategy]: OAuthProviderSettings;
};
type SamlSettings = {
    enabled: boolean;
};
type EnterpriseSSOSettings = {
    enabled: boolean;
};
type AttributesJSON = {
    [attribute in Attribute]: AttributeDataJSON;
};
type Attributes = {
    [attribute in Attribute]: AttributeData;
};
type Actions = {
    delete_self: boolean;
    create_organization: boolean;
};
interface UserSettingsJSON extends ClerkResourceJSON {
    id: never;
    object: never;
    attributes: AttributesJSON;
    actions: Actions;
    social: OAuthProviders;
    /**
     * @deprecated Use `enterprise_sso` instead.
     */
    saml: SamlSettings;
    enterprise_sso: EnterpriseSSOSettings;
    sign_in: SignInData;
    sign_up: SignUpData;
    password_settings: PasswordSettingsData;
    passkey_settings: PasskeySettingsData;
    username_settings: UsernameSettingsData;
}
interface UserSettingsResource extends ClerkResource {
    id?: undefined;
    social: OAuthProviders;
    /**
     * @deprecated Use `enterprise_sso` instead.
     */
    saml: SamlSettings;
    enterpriseSSO: EnterpriseSSOSettings;
    attributes: Attributes;
    actions: Actions;
    signIn: SignInData;
    signUp: SignUpData;
    passwordSettings: PasswordSettingsData;
    usernameSettings: UsernameSettingsData;
    passkeySettings: PasskeySettingsData;
    socialProviderStrategies: OAuthStrategy[];
    authenticatableSocialStrategies: OAuthStrategy[];
    web3FirstFactors: Web3Strategy[];
    enabledFirstFactorIdentifiers: Attribute[];
    instanceIsPasswordBased: boolean;
    hasValidAuthFactor: boolean;
    __internal_toSnapshot: () => UserSettingsJSONSnapshot;
}

interface ZxcvbnResult {
    feedback: {
        warning: string | null;
        suggestions: string[];
    };
    score: 0 | 1 | 2 | 3 | 4;
    password: string;
    guesses: number;
    guessesLog10: number;
    calcTime: number;
}
type ComplexityErrors = {
    [key in keyof Partial<Omit<PasswordSettingsData, 'disable_hibp' | 'min_zxcvbn_strength' | 'show_zxcvbn'>>]?: boolean;
};
type PasswordValidation = {
    complexity?: ComplexityErrors;
    strength?: PasswordStrength;
};
type ValidatePasswordCallbacks = {
    onValidation?: (res: PasswordValidation) => void;
    onValidationComplexity?: (b: boolean) => void;
};
type PasswordStrength<T = ZxcvbnResult> = {
    state: 'excellent';
    result: T;
} | {
    state: 'pass' | 'fail';
    keys: string[];
    result: T;
};

type AfterSignOutUrl = {
    /**
     * Full URL or path to navigate to after successful sign out.
     */
    afterSignOutUrl?: string | null;
};
type AfterMultiSessionSingleSignOutUrl = {
    /**
     * The full URL or path to navigate to after signing out the current user is complete.
     * This option applies to [multi-session applications](https://clerk.com/docs/authentication/configuration/session-options#multi-session-applications).
     */
    afterMultiSessionSingleSignOutUrl?: string | null;
};
/**
 * @deprecated This will be removed in a future release.
 */
type LegacyRedirectProps = {
    /**
     * @deprecated Use `fallbackRedirectUrl` or `forceRedirectUrl` instead.
     */
    afterSignInUrl?: string | null;
    /**
     * @deprecated Use `fallbackRedirectUrl` or `forceRedirectUrl` instead.
     */
    afterSignUpUrl?: string | null;
    /**
     * @deprecated Use `fallbackRedirectUrl` or `forceRedirectUrl` instead.
     */
    redirectUrl?: string | null;
};
/**
 * Redirect URLs for different actions.
 * Mainly used to be used to type internal Clerk functions.
 */
type RedirectOptions = SignInForceRedirectUrl & SignInFallbackRedirectUrl & SignUpForceRedirectUrl & SignUpFallbackRedirectUrl & LegacyRedirectProps;
type AuthenticateWithRedirectParams = {
    /**
     * The full URL or path to the route that will complete the OAuth or SAML flow.
     * Typically, this will be a simple `/sso-callback` route that calls `Clerk.handleRedirectCallback`
     * or mounts the <AuthenticateWithRedirectCallback /> component.
     */
    redirectUrl: string;
    /**
     * The full URL or path to navigate to after the OAuth or SAML flow completes.
     */
    redirectUrlComplete: string;
    /**
     * Whether to continue (i.e. PATCH) an existing SignUp (if present) or create a new SignUp.
     */
    continueSignUp?: boolean;
    /**
     * One of the supported OAuth providers you can use to authenticate with, eg 'oauth_google'.
     * Alternatively `saml` or `enterprise_sso`, to authenticate with Enterprise SSO.
     */
    strategy: OAuthStrategy | SamlStrategy | EnterpriseSSOStrategy;
    /**
     * Identifier to use for targeting a Enterprise Connection at sign-in
     */
    identifier?: string;
    /**
     * Email address to use for targeting a Enterprise Connection at sign-up
     */
    emailAddress?: string;
    /**
     * Whether the user has accepted the legal requirements.
     */
    legalAccepted?: boolean;
};
type AuthenticateWithPopupParams = AuthenticateWithRedirectParams & {
    popup: Window | null;
};
type RedirectUrlProp = {
    /**
     * Full URL or path to navigate to after a successful action.
     */
    redirectUrl?: string | null;
};
type SignUpForceRedirectUrl = {
    /**
     * This URL will always be redirected to after the user signs up. It's recommended to use the [environment variable](https://clerk.com/docs/deployments/clerk-environment-variables#sign-in-and-sign-up-redirects) instead.
     */
    signUpForceRedirectUrl?: string | null;
};
type SignUpFallbackRedirectUrl = {
    /**
     * The fallback URL to redirect to after the user signs up, if there's no `redirect_url` in the path already. It's recommended to use the [environment variable](https://clerk.com/docs/deployments/clerk-environment-variables#sign-in-and-sign-up-redirects) instead.
     * @default '/'
     */
    signUpFallbackRedirectUrl?: string | null;
};
type SignInFallbackRedirectUrl = {
    /**
     * The fallback URL to redirect to after the user signs in, if there's no `redirect_url` in the path already. It's recommended to use the [environment variable](https://clerk.com/docs/deployments/clerk-environment-variables#sign-in-and-sign-up-redirects) instead.
     * @default '/'
     */
    signInFallbackRedirectUrl?: string | null;
};
type SignInForceRedirectUrl = {
    /**
     * This URL will always be redirected to after the user signs in. It's recommended to use the [environment variable](https://clerk.com/docs/deployments/clerk-environment-variables#sign-in-and-sign-up-redirects) instead.
     */
    signInForceRedirectUrl?: string | null;
};
type NewSubscriptionRedirectUrl = {
    /**
     * The URL to navigate to after the user completes the checkout and clicks the "Continue" button.
     */
    newSubscriptionRedirectUrl?: string | null;
};

/**
 * The `SignIn` object holds the state of the current sign-in and provides helper methods to navigate and complete the sign-in process. It is used to manage the sign-in lifecycle, including the first and second factor verification, and the creation of a new session.
 */
interface SignInResource extends ClerkResource {
    /**
     * The current status of the sign-in.
     */
    status: SignInStatus | null;
    /**
     * @deprecated This attribute will be removed in the next major version.
     */
    supportedIdentifiers: SignInIdentifier[];
    supportedFirstFactors: SignInFirstFactor[] | null;
    supportedSecondFactors: SignInSecondFactor[] | null;
    firstFactorVerification: VerificationResource;
    secondFactorVerification: VerificationResource;
    identifier: string | null;
    createdSessionId: string | null;
    userData: UserData;
    create: (params: SignInCreateParams) => Promise<SignInResource>;
    resetPassword: (params: ResetPasswordParams) => Promise<SignInResource>;
    prepareFirstFactor: (params: PrepareFirstFactorParams) => Promise<SignInResource>;
    attemptFirstFactor: (params: AttemptFirstFactorParams) => Promise<SignInResource>;
    prepareSecondFactor: (params: PrepareSecondFactorParams) => Promise<SignInResource>;
    attemptSecondFactor: (params: AttemptSecondFactorParams) => Promise<SignInResource>;
    authenticateWithRedirect: (params: AuthenticateWithRedirectParams) => Promise<void>;
    authenticateWithPopup: (params: AuthenticateWithPopupParams) => Promise<void>;
    authenticateWithWeb3: (params: AuthenticateWithWeb3Params) => Promise<SignInResource>;
    authenticateWithMetamask: () => Promise<SignInResource>;
    authenticateWithCoinbaseWallet: () => Promise<SignInResource>;
    authenticateWithOKXWallet: () => Promise<SignInResource>;
    authenticateWithPasskey: (params?: AuthenticateWithPasskeyParams) => Promise<SignInResource>;
    createEmailLinkFlow: () => CreateEmailLinkFlowReturn<SignInStartEmailLinkFlowParams, SignInResource>;
    validatePassword: (password: string, callbacks?: ValidatePasswordCallbacks) => void;
    /**
     * @internal
     */
    __internal_toSnapshot: () => SignInJSONSnapshot;
}
type SignInStatus = 'needs_identifier' | 'needs_first_factor' | 'needs_second_factor' | 'needs_new_password' | 'complete';
type SignInIdentifier = UsernameIdentifier | EmailAddressIdentifier | PhoneNumberIdentifier | Web3WalletIdentifier;
type SignInFirstFactor = EmailCodeFactor | EmailLinkFactor | PhoneCodeFactor | PasswordFactor | PasskeyFactor | ResetPasswordPhoneCodeFactor | ResetPasswordEmailCodeFactor | Web3SignatureFactor | OauthFactor | SamlFactor | EnterpriseSSOFactor;
type SignInSecondFactor = PhoneCodeFactor | TOTPFactor | BackupCodeFactor;
interface UserData {
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
    hasImage?: boolean;
}
type SignInFactor = SignInFirstFactor | SignInSecondFactor;
type PrepareFirstFactorParams = EmailCodeConfig | EmailLinkConfig | PhoneCodeConfig | Web3SignatureConfig | PassKeyConfig | ResetPasswordPhoneCodeFactorConfig | ResetPasswordEmailCodeFactorConfig | OAuthConfig | SamlConfig | EnterpriseSSOConfig;
type AttemptFirstFactorParams = PasskeyAttempt | EmailCodeAttempt | PhoneCodeAttempt | PasswordAttempt | Web3Attempt | ResetPasswordPhoneCodeAttempt | ResetPasswordEmailCodeAttempt;
type PrepareSecondFactorParams = PhoneCodeSecondFactorConfig;
type AttemptSecondFactorParams = PhoneCodeAttempt | TOTPAttempt | BackupCodeAttempt;
type SignInCreateParams = ({
    strategy: OAuthStrategy | SamlStrategy | EnterpriseSSOStrategy;
    redirectUrl: string;
    actionCompleteRedirectUrl?: string;
    identifier?: string;
    oidcPrompt?: string;
    oidcLoginHint?: string;
} | {
    strategy: TicketStrategy;
    ticket: string;
} | {
    strategy: GoogleOneTapStrategy;
    token: string;
} | {
    strategy: PasswordStrategy;
    password: string;
    identifier: string;
} | {
    strategy: PasskeyStrategy;
} | {
    strategy: PhoneCodeStrategy | EmailCodeStrategy | Web3Strategy | ResetPasswordEmailCodeStrategy | ResetPasswordPhoneCodeStrategy;
    identifier: string;
} | {
    strategy: EmailLinkStrategy;
    identifier: string;
    redirectUrl?: string;
} | {
    identifier: string;
} | {
    transfer?: boolean;
}) & {
    transfer?: boolean;
};
type ResetPasswordParams = {
    password: string;
    signOutOfOtherSessions?: boolean;
};
type AuthenticateWithPasskeyParams = {
    flow?: 'autofill' | 'discoverable';
};
interface SignInStartEmailLinkFlowParams extends StartEmailLinkFlowParams {
    emailAddressId: string;
}
type SignInStrategy = PasskeyStrategy | PasswordStrategy | ResetPasswordPhoneCodeStrategy | ResetPasswordEmailCodeStrategy | PhoneCodeStrategy | EmailCodeStrategy | EmailLinkStrategy | TicketStrategy | Web3Strategy | TOTPStrategy | BackupCodeStrategy | OAuthStrategy | SamlStrategy | EnterpriseSSOStrategy;
interface SignInJSON extends ClerkResourceJSON {
    object: 'sign_in';
    id: string;
    status: SignInStatus;
    /**
     * @deprecated This attribute will be removed in the next major version.
     */
    supported_identifiers: SignInIdentifier[];
    identifier: string;
    user_data: UserDataJSON;
    supported_first_factors: SignInFirstFactorJSON[];
    supported_second_factors: SignInSecondFactorJSON[];
    first_factor_verification: VerificationJSON | null;
    second_factor_verification: VerificationJSON | null;
    created_session_id: string | null;
}

type FirstNameAttribute = 'first_name';
type LastNameAttribute = 'last_name';
type PasswordAttribute = 'password';
type LegalAcceptedAttribute = 'legal_accepted';

declare global {
    /**
     * If you want to provide custom types for the signUp.unsafeMetadata object,
     * simply redeclare this rule in the global namespace.
     * Every user object will use the provided type.
     */
    interface SignUpUnsafeMetadata {
        [k: string]: unknown;
    }
}
/**
 * The `SignUp` object holds the state of the current sign-up and provides helper methods to navigate and complete the sign-up process. Once a sign-up is complete, a new user is created.
 */
interface SignUpResource extends ClerkResource {
    /**
     * The current status of the sign-up.
     */
    status: SignUpStatus | null;
    requiredFields: SignUpField[];
    optionalFields: SignUpField[];
    missingFields: SignUpField[];
    unverifiedFields: SignUpIdentificationField[];
    verifications: SignUpVerificationsResource;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    emailAddress: string | null;
    phoneNumber: string | null;
    web3wallet: string | null;
    hasPassword: boolean;
    unsafeMetadata: SignUpUnsafeMetadata;
    createdSessionId: string | null;
    createdUserId: string | null;
    abandonAt: number | null;
    legalAcceptedAt: number | null;
    create: (params: SignUpCreateParams) => Promise<SignUpResource>;
    update: (params: SignUpUpdateParams) => Promise<SignUpResource>;
    upsert: (params: SignUpCreateParams | SignUpUpdateParams) => Promise<SignUpResource>;
    prepareVerification: (params: PrepareVerificationParams) => Promise<SignUpResource>;
    attemptVerification: (params: AttemptVerificationParams) => Promise<SignUpResource>;
    prepareEmailAddressVerification: (params?: PrepareEmailAddressVerificationParams) => Promise<SignUpResource>;
    attemptEmailAddressVerification: (params: AttemptEmailAddressVerificationParams) => Promise<SignUpResource>;
    preparePhoneNumberVerification: (params?: PreparePhoneNumberVerificationParams) => Promise<SignUpResource>;
    attemptPhoneNumberVerification: (params: AttemptPhoneNumberVerificationParams) => Promise<SignUpResource>;
    prepareWeb3WalletVerification: (params?: PrepareWeb3WalletVerificationParams) => Promise<SignUpResource>;
    attemptWeb3WalletVerification: (params: AttemptWeb3WalletVerificationParams) => Promise<SignUpResource>;
    createEmailLinkFlow: () => CreateEmailLinkFlowReturn<StartEmailLinkFlowParams, SignUpResource>;
    validatePassword: (password: string, callbacks?: ValidatePasswordCallbacks) => void;
    authenticateWithRedirect: (params: AuthenticateWithRedirectParams & {
        unsafeMetadata?: SignUpUnsafeMetadata;
    }) => Promise<void>;
    authenticateWithPopup: (params: AuthenticateWithPopupParams & {
        unsafeMetadata?: SignUpUnsafeMetadata;
    }) => Promise<void>;
    authenticateWithWeb3: (params: AuthenticateWithWeb3Params & {
        unsafeMetadata?: SignUpUnsafeMetadata;
        legalAccepted?: boolean;
    }) => Promise<SignUpResource>;
    authenticateWithMetamask: (params?: SignUpAuthenticateWithWeb3Params) => Promise<SignUpResource>;
    authenticateWithCoinbaseWallet: (params?: SignUpAuthenticateWithWeb3Params) => Promise<SignUpResource>;
    authenticateWithOKXWallet: (params?: SignUpAuthenticateWithWeb3Params) => Promise<SignUpResource>;
    __internal_toSnapshot: () => SignUpJSONSnapshot;
}
type SignUpStatus = 'missing_requirements' | 'complete' | 'abandoned';
type SignUpField = SignUpAttributeField | SignUpIdentificationField;
type PrepareVerificationParams = {
    strategy: EmailCodeStrategy;
} | {
    strategy: EmailLinkStrategy;
    redirectUrl?: string;
} | {
    strategy: PhoneCodeStrategy;
} | {
    strategy: Web3Strategy;
} | {
    strategy: OAuthStrategy;
    redirectUrl?: string;
    actionCompleteRedirectUrl?: string;
    oidcPrompt?: string;
    oidcLoginHint?: string;
} | {
    strategy: SamlStrategy | EnterpriseSSOStrategy;
    redirectUrl?: string;
    actionCompleteRedirectUrl?: string;
};
type AttemptVerificationParams = {
    strategy: EmailCodeStrategy | PhoneCodeStrategy;
    code: string;
} | {
    strategy: Web3Strategy;
    signature: string;
};
type SignUpAttributeField = FirstNameAttribute | LastNameAttribute | PasswordAttribute | LegalAcceptedAttribute;
type SignUpVerifiableField = UsernameIdentifier | EmailAddressIdentifier | PhoneNumberIdentifier | EmailAddressOrPhoneNumberIdentifier | Web3WalletIdentifier;
type SignUpIdentificationField = SignUpVerifiableField | OAuthStrategy | SamlStrategy | EnterpriseSSOStrategy;
type SignUpCreateParams = Partial<{
    externalAccountStrategy: string;
    externalAccountRedirectUrl: string;
    externalAccountActionCompleteRedirectUrl: string;
    strategy: OAuthStrategy | SamlStrategy | EnterpriseSSOStrategy | TicketStrategy | GoogleOneTapStrategy;
    redirectUrl: string;
    actionCompleteRedirectUrl: string;
    transfer: boolean;
    unsafeMetadata: SignUpUnsafeMetadata;
    ticket: string;
    token: string;
    legalAccepted: boolean;
    oidcPrompt: string;
    oidcLoginHint: string;
} & Omit<SnakeToCamel<Record<SignUpAttributeField | SignUpVerifiableField, string>>, 'legalAccepted'>>;
type SignUpUpdateParams = SignUpCreateParams;
/**
 * @deprecated Use `SignUpAuthenticateWithWeb3Params` instead.
 */
type SignUpAuthenticateWithMetamaskParams = SignUpAuthenticateWithWeb3Params;
type SignUpAuthenticateWithWeb3Params = {
    unsafeMetadata?: SignUpUnsafeMetadata;
};
interface SignUpVerificationsResource {
    emailAddress: SignUpVerificationResource;
    phoneNumber: SignUpVerificationResource;
    externalAccount: VerificationResource;
    web3Wallet: VerificationResource;
    __internal_toSnapshot: () => SignUpVerificationsJSONSnapshot;
}
interface SignUpVerificationResource extends VerificationResource {
    supportedStrategies: string[];
    nextAction: string;
    __internal_toSnapshot: () => SignUpVerificationJSONSnapshot;
}

type EmUnit = string;
type FontWeight = string;
type BoxShadow = string;
type TransparentColor = 'transparent';
type BuiltInColors = 'black' | 'blue' | 'red' | 'green' | 'grey' | 'white' | 'yellow';
type HexColor = `#${string}`;
type HslaColor = {
    h: number;
    s: number;
    l: number;
    a?: number;
};
type RgbaColor = {
    r: number;
    g: number;
    b: number;
    a?: number;
};
type HexColorString = HexColor;
type HslaColorString = `hsl(${string})` | `hsla(${string})`;
type RgbaColorString = `rgb(${string})` | `rgba(${string})`;
type Color = string | HexColor | HslaColor | RgbaColor | TransparentColor;
type ColorString = HexColorString | HslaColorString | RgbaColorString;

/**
 * Currently representing API DTOs in their JSON form.
 */

interface ClerkResourceJSON {
    id: string;
    object: string;
}
type PartialWithClerkResource<T extends ClerkResourceJSON> = Omit<Partial<ClerkResourceJSON>, 'id' | 'object'> & Pick<T, 'id' | 'object'>;
interface DisplayThemeJSON {
    general: {
        color: HexColor;
        background_color: Color;
        font_family: string;
        font_color: HexColor;
        label_font_weight: FontWeight;
        padding: EmUnit;
        border_radius: EmUnit;
        box_shadow: BoxShadow;
    };
    buttons: {
        font_color: HexColor;
        font_family: string;
        font_weight: FontWeight;
    };
    accounts: {
        background_color: Color;
    };
}
interface ImageJSON {
    object: 'image';
    id: string;
    name: string;
    public_url: string;
}
interface EnvironmentJSON extends ClerkResourceJSON {
    auth_config: AuthConfigJSON;
    commerce_settings: CommerceSettingsJSON;
    display_config: DisplayConfigJSON;
    user_settings: UserSettingsJSON;
    organization_settings: OrganizationSettingsJSON;
    maintenance_mode: boolean;
}
interface ClientJSON extends ClerkResourceJSON {
    object: 'client';
    id: string;
    sessions: SessionJSON[];
    sign_up: SignUpJSON | null;
    sign_in: SignInJSON | null;
    captcha_bypass?: boolean;
    last_active_session_id: string | null;
    cookie_expires_at: number | null;
    created_at: number;
    updated_at: number;
}
interface SignUpJSON extends ClerkResourceJSON {
    object: 'sign_up';
    status: SignUpStatus;
    required_fields: SignUpField[];
    optional_fields: SignUpField[];
    missing_fields: SignUpField[];
    unverified_fields: SignUpIdentificationField[];
    username: string | null;
    first_name: string | null;
    last_name: string | null;
    email_address: string | null;
    phone_number: string | null;
    web3_wallet: string | null;
    external_account_strategy: string | null;
    external_account: any;
    has_password: boolean;
    unsafe_metadata: SignUpUnsafeMetadata;
    created_session_id: string | null;
    created_user_id: string | null;
    abandon_at: number | null;
    legal_accepted_at: number | null;
    verifications: SignUpVerificationsJSON | null;
}
interface SessionJSON extends ClerkResourceJSON {
    object: 'session';
    id: string;
    status: SessionStatus;
    /**
     * The tuple represents the minutes that have passed since the last time a first or second factor were verified.
     * This API is experimental and may change at any moment.
     * @experimental
     */
    factor_verification_age: [firstFactorAge: number, secondFactorAge: number] | null;
    expire_at: number;
    abandon_at: number;
    last_active_at: number;
    last_active_token: TokenJSON;
    last_active_organization_id: string | null;
    actor: ActClaim | null;
    tasks: Array<SessionTask> | null;
    user: UserJSON;
    public_user_data: PublicUserDataJSON;
    created_at: number;
    updated_at: number;
}
interface SessionVerificationJSON extends ClerkResourceJSON {
    object: 'session_verification';
    status: SessionVerificationStatus;
    first_factor_verification: VerificationJSON | null;
    session: SessionJSON;
    second_factor_verification: VerificationJSON | null;
    level: SessionVerificationLevel;
    supported_first_factors: SignInFirstFactorJSON[] | null;
    supported_second_factors: SignInSecondFactorJSON[] | null;
}
interface EmailAddressJSON extends ClerkResourceJSON {
    object: 'email_address';
    email_address: string;
    verification: VerificationJSON | null;
    linked_to: IdentificationLinkJSON[];
    matches_sso_connection: boolean;
}
interface IdentificationLinkJSON extends ClerkResourceJSON {
    id: string;
    type: string;
}
interface PhoneNumberJSON extends ClerkResourceJSON {
    object: 'phone_number';
    id: string;
    phone_number: string;
    reserved_for_second_factor: boolean;
    default_second_factor: boolean;
    linked_to: IdentificationLinkJSON[];
    verification: VerificationJSON | null;
    backup_codes?: string[];
}
interface PasskeyJSON extends ClerkResourceJSON {
    object: 'passkey';
    id: string;
    name: string | null;
    verification: VerificationJSON | null;
    last_used_at: number | null;
    updated_at: number;
    created_at: number;
}
interface Web3WalletJSON extends ClerkResourceJSON {
    object: 'web3_wallet';
    id: string;
    web3_wallet: string;
    verification: VerificationJSON | null;
}
interface ExternalAccountJSON extends ClerkResourceJSON {
    object: 'external_account';
    provider: OAuthProvider;
    identification_id: string;
    provider_user_id: string;
    approved_scopes: string;
    email_address: string;
    first_name: string;
    last_name: string;
    image_url: string;
    username: string;
    phone_number: string;
    public_metadata: Record<string, unknown>;
    label: string;
    verification?: VerificationJSON;
}
interface EnterpriseAccountJSON extends ClerkResourceJSON {
    object: 'enterprise_account';
    active: boolean;
    email_address: string;
    enterprise_connection: EnterpriseAccountConnectionJSON | null;
    first_name: string | null;
    last_name: string | null;
    protocol: EnterpriseProtocol;
    provider: EnterpriseProvider;
    provider_user_id: string | null;
    public_metadata: Record<string, unknown>;
    verification: VerificationJSON | null;
}
interface EnterpriseAccountConnectionJSON extends ClerkResourceJSON {
    active: boolean;
    allow_idp_initiated: boolean;
    allow_subdomains: boolean;
    disable_additional_identifications: boolean;
    domain: string;
    logo_public_url: string | null;
    name: string;
    protocol: EnterpriseProtocol;
    provider: EnterpriseProvider;
    sync_user_attributes: boolean;
    created_at: number;
    updated_at: number;
}
interface SamlAccountJSON extends ClerkResourceJSON {
    object: 'saml_account';
    provider: SamlIdpSlug;
    provider_user_id: string | null;
    active: boolean;
    email_address: string;
    first_name: string;
    last_name: string;
    verification?: VerificationJSON;
    saml_connection?: SamlAccountConnectionJSON;
}
interface UserJSON extends ClerkResourceJSON {
    object: 'user';
    id: string;
    external_id: string | null;
    primary_email_address_id: string | null;
    primary_phone_number_id: string | null;
    primary_web3_wallet_id: string | null;
    image_url: string;
    has_image: boolean;
    username: string | null;
    email_addresses: EmailAddressJSON[];
    phone_numbers: PhoneNumberJSON[];
    web3_wallets: Web3WalletJSON[];
    external_accounts: ExternalAccountJSON[];
    enterprise_accounts: EnterpriseAccountJSON[];
    passkeys: PasskeyJSON[];
    /**
     * @deprecated Use `enterprise_accounts` instead.
     */
    saml_accounts: SamlAccountJSON[];
    organization_memberships: OrganizationMembershipJSON[];
    password_enabled: boolean;
    profile_image_id: string;
    first_name: string | null;
    last_name: string | null;
    totp_enabled: boolean;
    backup_code_enabled: boolean;
    two_factor_enabled: boolean;
    public_metadata: UserPublicMetadata;
    unsafe_metadata: UserUnsafeMetadata;
    last_sign_in_at: number | null;
    create_organization_enabled: boolean;
    create_organizations_limit: number | null;
    delete_self_enabled: boolean;
    legal_accepted_at: number | null;
    updated_at: number;
    created_at: number;
}
interface PublicUserDataJSON {
    first_name: string | null;
    last_name: string | null;
    image_url: string;
    has_image: boolean;
    identifier: string;
    user_id?: string;
}
interface SessionWithActivitiesJSON extends Omit<SessionJSON, 'user'> {
    user: null;
    latest_activity: SessionActivityJSON;
}
interface AuthConfigJSON extends ClerkResourceJSON {
    single_session_mode: boolean;
    claimed_at: number | null;
    reverification: boolean;
}
interface VerificationJSON extends ClerkResourceJSON {
    status: VerificationStatus;
    verified_at_client: string;
    strategy: string;
    nonce?: string;
    message?: string;
    external_verification_redirect_url?: string;
    attempts: number;
    expire_at: number;
    error: ClerkAPIErrorJSON;
}
interface SignUpVerificationsJSON {
    email_address: SignUpVerificationJSON;
    phone_number: SignUpVerificationJSON;
    web3_wallet: SignUpVerificationJSON;
    external_account: VerificationJSON;
}
interface SignUpVerificationJSON extends VerificationJSON {
    next_action: string;
    supported_strategies: string[];
}
interface ClerkAPIErrorJSON {
    code: string;
    message: string;
    long_message?: string;
    meta?: {
        param_name?: string;
        session_id?: string;
        email_addresses?: string[];
        identifiers?: string[];
        zxcvbn?: {
            suggestions: {
                code: string;
                message: string;
            }[];
        };
    };
}
interface TokenJSON extends ClerkResourceJSON {
    object: 'token';
    jwt: string;
}
interface SessionActivityJSON extends ClerkResourceJSON {
    object: 'session_activity';
    browser_name?: string;
    browser_version?: string;
    device_type?: string;
    ip_address?: string;
    city?: string;
    country?: string;
    is_mobile?: boolean;
}
interface OrganizationJSON extends ClerkResourceJSON {
    object: 'organization';
    id: string;
    image_url: string;
    has_image: boolean;
    name: string;
    slug: string;
    public_metadata: OrganizationPublicMetadata;
    created_at: number;
    updated_at: number;
    members_count: number;
    pending_invitations_count: number;
    admin_delete_enabled: boolean;
    max_allowed_memberships: number;
}
interface OrganizationMembershipJSON extends ClerkResourceJSON {
    object: 'organization_membership';
    id: string;
    organization: OrganizationJSON;
    permissions: OrganizationPermissionKey[];
    public_metadata: OrganizationMembershipPublicMetadata;
    public_user_data: PublicUserDataJSON;
    role: OrganizationCustomRoleKey;
    created_at: number;
    updated_at: number;
}
interface OrganizationInvitationJSON extends ClerkResourceJSON {
    object: 'organization_invitation';
    id: string;
    email_address: string;
    organization_id: string;
    public_metadata: OrganizationInvitationPublicMetadata;
    status: OrganizationInvitationStatus;
    role: OrganizationCustomRoleKey;
    created_at: number;
    updated_at: number;
}
interface OrganizationDomainVerificationJSON {
    status: OrganizationDomainVerificationStatus;
    strategy: 'email_code';
    attempts: number;
    expires_at: number;
}
interface OrganizationDomainJSON extends ClerkResourceJSON {
    object: 'organization_domain';
    id: string;
    name: string;
    organization_id: string;
    enrollment_mode: OrganizationEnrollmentMode;
    verification: OrganizationDomainVerificationJSON | null;
    affiliation_email_address: string | null;
    created_at: number;
    updated_at: number;
    total_pending_invitations: number;
    total_pending_suggestions: number;
}
interface RoleJSON extends ClerkResourceJSON {
    object: 'role';
    id: string;
    key: string;
    name: string;
    description: string;
    permissions: PermissionJSON[];
    created_at: number;
    updated_at: number;
}
interface PermissionJSON extends ClerkResourceJSON {
    object: 'permission';
    id: string;
    key: string;
    name: string;
    description: string;
    type: 'system' | 'user';
    created_at: number;
    updated_at: number;
}
interface PublicOrganizationDataJSON {
    id: string;
    name: string;
    slug: string | null;
    has_image: boolean;
    image_url: string;
}
interface OrganizationSuggestionJSON extends ClerkResourceJSON {
    object: 'organization_suggestion';
    id: string;
    public_organization_data: PublicOrganizationDataJSON;
    status: OrganizationSuggestionStatus;
    created_at: number;
    updated_at: number;
}
interface OrganizationMembershipRequestJSON extends ClerkResourceJSON {
    object: 'organization_membership_request';
    id: string;
    organization_id: string;
    status: OrganizationInvitationStatus;
    public_user_data: PublicUserDataJSON;
    created_at: number;
    updated_at: number;
}
interface UserOrganizationInvitationJSON extends ClerkResourceJSON {
    object: 'organization_invitation';
    id: string;
    email_address: string;
    public_organization_data: PublicOrganizationDataJSON;
    public_metadata: OrganizationInvitationPublicMetadata;
    status: OrganizationInvitationStatus;
    role: OrganizationCustomRoleKey;
    created_at: number;
    updated_at: number;
}
interface UserDataJSON {
    first_name?: string;
    last_name?: string;
    image_url: string;
    has_image: boolean;
}
interface TOTPJSON extends ClerkResourceJSON {
    object: 'totp';
    id: string;
    secret?: string;
    uri?: string;
    verified: boolean;
    backup_codes?: string[];
    created_at: number;
    updated_at: number;
}
interface BackupCodeJSON extends ClerkResourceJSON {
    object: 'backup_code';
    id: string;
    codes: string[];
    created_at: number;
    updated_at: number;
}
interface DeletedObjectJSON {
    object: string;
    id?: string;
    slug?: string;
    deleted: boolean;
}
type SignInFirstFactorJSON = CamelToSnake<SignInFirstFactor>;
type SignInSecondFactorJSON = CamelToSnake<SignInSecondFactor>;
/**
 * Types for WebAuthN passkeys
 */
type Base64UrlString = string;
interface PublicKeyCredentialUserEntityJSON {
    name: string;
    displayName: string;
    id: Base64UrlString;
}
interface PublicKeyCredentialDescriptorJSON {
    type: 'public-key';
    id: Base64UrlString;
    transports?: ('ble' | 'hybrid' | 'internal' | 'nfc' | 'usb')[];
}
interface AuthenticatorSelectionCriteriaJSON {
    requireResidentKey: boolean;
    residentKey: 'discouraged' | 'preferred' | 'required';
    userVerification: 'discouraged' | 'preferred' | 'required';
}
interface PublicKeyCredentialCreationOptionsJSON {
    rp: PublicKeyCredentialRpEntity;
    user: PublicKeyCredentialUserEntityJSON;
    challenge: Base64UrlString;
    pubKeyCredParams: PublicKeyCredentialParameters[];
    timeout: number;
    excludeCredentials: PublicKeyCredentialDescriptorJSON[];
    authenticatorSelection: AuthenticatorSelectionCriteriaJSON;
    attestation: 'direct' | 'enterprise' | 'indirect' | 'none';
}
interface PublicKeyCredentialRequestOptionsJSON {
    allowCredentials: PublicKeyCredentialDescriptorJSON[];
    challenge: Base64UrlString;
    rpId: string;
    timeout: number;
    userVerification: 'discouraged' | 'preferred' | 'required';
}
interface SamlAccountConnectionJSON extends ClerkResourceJSON {
    id: string;
    name: string;
    domain: string;
    active: boolean;
    provider: string;
    sync_user_attributes: boolean;
    allow_subdomains: boolean;
    allow_idp_initiated: boolean;
    disable_additional_identifications: boolean;
    created_at: number;
    updated_at: number;
}
interface WaitlistJSON extends ClerkResourceJSON {
    object: 'waitlist';
    id: string;
    created_at: number;
    updated_at: number;
}
interface CommerceFeatureJSON extends ClerkResourceJSON {
    object: 'commerce_feature';
    id: string;
    name: string;
    description: string;
    slug: string;
    avatar_url: string;
}
interface CommercePlanJSON extends ClerkResourceJSON {
    object: 'commerce_plan';
    id: string;
    name: string;
    amount: number;
    amount_formatted: string;
    annual_amount: number;
    annual_amount_formatted: string;
    annual_monthly_amount: number;
    annual_monthly_amount_formatted: string;
    currency_symbol: string;
    currency: string;
    description: string;
    is_default: boolean;
    is_recurring: boolean;
    has_base_fee: boolean;
    payer_type: string[];
    publicly_visible: boolean;
    slug: string;
    avatar_url: string;
    features: CommerceFeatureJSON[];
}
interface CommerceProductJSON extends ClerkResourceJSON {
    object: 'commerce_product';
    id: string;
    slug: string;
    currency: string;
    is_default: boolean;
    plans: CommercePlanJSON[];
}
interface CommercePaymentSourceJSON extends ClerkResourceJSON {
    object: 'commerce_payment_source';
    id: string;
    last4: string;
    payment_method: string;
    card_type: string;
    is_default: boolean;
    status: CommercePaymentSourceStatus;
    wallet_type: string | null;
}
interface CommerceInitializedPaymentSourceJSON extends ClerkResourceJSON {
    object: 'commerce_payment_source_initialize';
    external_client_secret: string;
    external_gateway_id: string;
}
interface CommerceStatementJSON extends ClerkResourceJSON {
    object: 'commerce_statement';
    id: string;
    status: CommerceStatementStatus;
    timestamp: number;
    groups: CommerceStatementGroupJSON[];
    totals: CommerceStatementTotalsJSON;
}
interface CommerceStatementGroupJSON extends ClerkResourceJSON {
    object: 'commerce_statement_group';
    timestamp: number;
    items: CommercePaymentJSON[];
}
interface CommercePaymentJSON extends ClerkResourceJSON {
    object: 'commerce_payment';
    id: string;
    amount: CommerceMoneyJSON;
    payment_source: CommercePaymentSourceJSON;
    subscription: CommerceSubscriptionJSON;
    charge_type: CommercePaymentChargeType;
    status: CommercePaymentStatus;
}
interface CommerceSubscriptionJSON extends ClerkResourceJSON {
    object: 'commerce_subscription';
    id: string;
    amount?: CommerceMoneyJSON;
    credit?: {
        amount: CommerceMoneyJSON;
    };
    payment_source_id: string;
    plan: CommercePlanJSON;
    plan_period: CommerceSubscriptionPlanPeriod;
    status: CommerceSubscriptionStatus;
    period_start: number;
    period_end: number;
    canceled_at: number | null;
}
interface CommerceMoneyJSON {
    amount: number;
    amount_formatted: string;
    currency: string;
    currency_symbol: string;
}
interface CommerceCheckoutTotalsJSON {
    grand_total: CommerceMoneyJSON;
    subtotal: CommerceMoneyJSON;
    tax_total: CommerceMoneyJSON;
    total_due_now: CommerceMoneyJSON;
    credit: CommerceMoneyJSON;
}
interface CommerceStatementTotalsJSON extends Omit<CommerceCheckoutTotalsJSON, 'total_due_now'> {
}
interface CommerceCheckoutJSON extends ClerkResourceJSON {
    object: 'commerce_checkout';
    id: string;
    external_client_secret: string;
    external_gateway_id: string;
    statement_id: string;
    payment_source?: CommercePaymentSourceJSON;
    plan: CommercePlanJSON;
    plan_period: CommerceSubscriptionPlanPeriod;
    status: string;
    subscription?: CommerceSubscriptionJSON;
    totals: CommerceCheckoutTotalsJSON;
    is_immediate_plan_change: boolean;
}

interface CommerceSettingsJSON extends ClerkResourceJSON {
    billing: {
        enabled: boolean;
        stripe_publishable_key: string;
        has_paid_user_plans: boolean;
        has_paid_org_plans: boolean;
    };
}
interface CommerceSettingsResource extends ClerkResource {
    billing: {
        enabled: boolean;
        stripePublishableKey: string;
        hasPaidUserPlans: boolean;
        hasPaidOrgPlans: boolean;
    };
    __internal_toSnapshot: () => CommerceSettingsJSONSnapshot;
}

type SignInJSONSnapshot = Override<Nullable<SignInJSON, 'status' | 'identifier' | 'supported_first_factors' | 'supported_second_factors'>, {
    first_factor_verification: VerificationJSONSnapshot;
    second_factor_verification: VerificationJSONSnapshot;
    user_data: UserDataJSONSnapshot;
}>;
type VerificationJSONSnapshot = Nullable<VerificationJSON, 'status' | 'verified_at_client' | 'strategy' | 'nonce' | 'message' | 'external_verification_redirect_url' | 'attempts' | 'expire_at'>;
type UserDataJSONSnapshot = Nullable<UserDataJSON, 'image_url' | 'has_image'>;
type UserJSONSnapshot = Override<Nullable<UserJSON, 'external_id' | 'primary_email_address_id' | 'primary_phone_number_id' | 'primary_web3_wallet_id' | 'username' | 'first_name' | 'last_name' | 'updated_at' | 'created_at'>, {
    external_accounts: ExternalAccountJSONSnapshot[];
    email_addresses: EmailAddressJSONSnapshot[];
    passkeys: PasskeyJSONSnapshot[];
    enterprise_accounts: EnterpriseAccountJSONSnapshot[];
    phone_numbers: PhoneNumberJSONSnapshot[];
    saml_accounts: SamlAccountJSONSnapshot[];
    web3_wallets: Web3WalletJSONSnapshot[];
}>;
type ExternalAccountJSONSnapshot = Override<ExternalAccountJSON, {
    verification: VerificationJSONSnapshot | null;
}>;
type SessionJSONSnapshot = Override<Nullable<SessionJSON, 'last_active_at' | 'last_active_token'>, {
    user: UserJSONSnapshot | null;
}>;
type SignUpJSONSnapshot = Override<Nullable<SignUpJSON, 'status'>, {
    verifications: SignUpVerificationsJSONSnapshot;
}>;
type ClientJSONSnapshot = Override<Nullable<ClientJSON, 'created_at' | 'updated_at'>, {
    sign_up: SignUpJSONSnapshot;
    sign_in: SignInJSONSnapshot;
    sessions: SessionJSONSnapshot[];
}>;
type AuthConfigJSONSnapshot = AuthConfigJSON;
type EnvironmentJSONSnapshot = EnvironmentJSON;
type DisplayConfigJSONSnapshot = DisplayConfigJSON;
type EmailAddressJSONSnapshot = Override<EmailAddressJSON, {
    verification: VerificationJSONSnapshot | null;
}>;
type EnterpriseAccountJSONSnapshot = Override<EnterpriseAccountJSON, {
    verification: VerificationJSONSnapshot | null;
}>;
type EnterpriseAccountConnectionJSONSnapshot = EnterpriseAccountConnectionJSON;
type IdentificationLinkJSONSnapshot = IdentificationLinkJSON;
type OrganizationJSONSnapshot = OrganizationJSON;
type OrganizationMembershipJSONSnapshot = OrganizationMembershipJSON;
type OrganizationSettingsJSONSnapshot = OrganizationSettingsJSON;
type PasskeyJSONSnapshot = Override<PasskeyJSON, {
    verification: VerificationJSONSnapshot | null;
}>;
type PhoneNumberJSONSnapshot = Override<PhoneNumberJSON, {
    verification: VerificationJSONSnapshot;
}>;
type SamlAccountJSONSnapshot = Override<SamlAccountJSON, {
    verification: VerificationJSONSnapshot | null;
}>;
type SamlAccountConnectionJSONSnapshot = SamlAccountConnectionJSON;
type SignUpVerificationsJSONSnapshot = Override<SignUpVerificationsJSON, {
    external_account: VerificationJSONSnapshot;
    web3_wallet: SignUpVerificationJSONSnapshot;
    email_address: SignUpVerificationJSONSnapshot;
    phone_number: SignUpVerificationJSONSnapshot;
}>;
type SignUpVerificationJSONSnapshot = Pick<SignUpVerificationJSON, 'next_action' | 'supported_strategies'> & VerificationJSONSnapshot;
type TokenJSONSnapshot = TokenJSON;
type UserSettingsJSONSnapshot = UserSettingsJSON;
type Web3WalletJSONSnapshot = Override<Web3WalletJSON, {
    verification: VerificationJSONSnapshot | null;
}>;
type PublicUserDataJSONSnapshot = PublicUserDataJSON;
type CommerceSettingsJSONSnapshot = CommerceSettingsJSON;
type CommercePlanJSONSnapshot = CommercePlanJSON;
type CommerceFeatureJSONSnapshot = CommerceFeatureJSON;

type EnterpriseProtocol = 'saml' | 'oauth';
type EnterpriseProvider = SamlIdpSlug | `oauth_${OAuthProvider}`;
interface EnterpriseAccountResource extends ClerkResource {
    active: boolean;
    emailAddress: string;
    enterpriseConnection: EnterpriseAccountConnectionResource | null;
    firstName: string | null;
    lastName: string | null;
    protocol: EnterpriseProtocol;
    provider: EnterpriseProvider;
    providerUserId: string | null;
    publicMetadata: Record<string, unknown> | null;
    verification: VerificationResource | null;
    __internal_toSnapshot: () => EnterpriseAccountJSONSnapshot;
}
interface EnterpriseAccountConnectionResource extends ClerkResource {
    active: boolean;
    allowIdpInitiated: boolean;
    allowSubdomains: boolean;
    disableAdditionalIdentifications: boolean;
    domain: string;
    logoPublicUrl: string | null;
    name: string;
    protocol: EnterpriseProtocol;
    provider: EnterpriseProvider;
    syncUserAttributes: boolean;
    __internal_toSnapshot: () => EnterpriseAccountConnectionJSONSnapshot;
}

type CSSProperties = CSS.PropertiesFallback<number | string>;
type CSSPropertiesWithMultiValues = {
    [K in keyof CSSProperties]: CSSProperties[K];
};
type CSSPseudos = {
    [K in CSS.Pseudos as `&${K}`]?: CSSObject;
};
interface CSSObject extends CSSPropertiesWithMultiValues, CSSPseudos {
}
type UserDefinedStyle = string | CSSObject;
type Shade = '25' | '50' | '100' | '150' | '200' | '300' | '400' | '500' | '600' | '700' | '750' | '800' | '850' | '900' | '950';
type ColorScale<T = string> = Record<Shade, T>;
type AlphaColorScale<T = string> = {
    [K in Shade]: T;
};
type ColorScaleWithRequiredBase<T = string> = Partial<ColorScale<T>> & {
    '500': T;
};
type CssColorOrScale = string | ColorScaleWithRequiredBase;
type CssColorOrAlphaScale = string | AlphaColorScale;
type CssColor = string | TransparentColor | BuiltInColors;
type CssLengthUnit = string;
type FontWeightNamedValue = CSS.Properties['fontWeight'];
type FontWeightNumericValue = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type FontWeightScale = {
    normal?: FontWeightNamedValue | FontWeightNumericValue;
    medium?: FontWeightNamedValue | FontWeightNumericValue;
    bold?: FontWeightNamedValue | FontWeightNumericValue;
};
type WebSafeFont = 'Arial' | 'Brush Script MT' | 'Courier New' | 'Garamond' | 'Georgia' | 'Helvetica' | 'Tahoma' | 'Times New Roman' | 'Trebuchet MS' | 'Verdana';
type FontFamily = string | WebSafeFont;
type LoadingState = 'loading';
type ErrorState = 'error';
type OpenState = 'open';
type ActiveState = 'active';
type ElementState = LoadingState | ErrorState | OpenState | ActiveState;
type ControlState = ErrorState;
/**
 * A type that describes the states and the ids that we will combine
 * in order to create all theming combinations
 * If jsx exists, the element can also receive a typed function that returns a JSX.Element
 */
type ConfigOptions = {
    states: ElementState;
    ids: string;
    jsx: any;
};
type WithOptions<Ids = never, States = never, Jsx = never> = {
    ids: Ids;
    states: States;
    jsx: Jsx;
};
/**
 * Create a type union of all state + id combinations
 */
type StateSelectors<E extends string, S extends ElementState | undefined = never> = S extends never ? never : `${E}__${S}`;
/**
 * Create a type union consisting of the base element with all valid ids appended
 */
type IdSelectors<E extends string, Id extends string | undefined = never> = Id extends never ? never : `${E}__${Id}`;
/**
 * Create a type union consisting of all base, base+state, base+id, base+id+state combinations
 */
type ElementPartsKeys<Name extends string, Opts extends ConfigOptions> = StateSelectors<Name, Opts['states']> | IdSelectors<Name, Opts['ids']> | StateSelectors<IdSelectors<Name, Opts['ids']>, Opts['states']>;
/**
 * Create an object type mapping base elements and part combinations (base, base+state, base+id, base+id+state)
 * to the value they can accept (usually a style rule, a string class or jsx)
 */
type Selectors<RootElemName extends string, Opts extends ConfigOptions> = Partial<Record<RootElemName, UserDefinedStyle | Opts['jsx']>> | Partial<Record<ElementPartsKeys<RootElemName, Opts>, UserDefinedStyle>>;
/**
 * Convert a kebab-cased key from ElementsConfig into a camelCased Elements key
 */
type ElementObjectKey<K extends string> = K extends `${infer Parent}-${infer Rest}` ? `${Parent}${Capitalize<Rest>}` : K;
/**
 * A map that describes the possible combinations we need to generate
 * for each unique base element
 * Kebab-case is used to differentiate between the container and child elements
 */
type ElementsConfig = {
    button: WithOptions<string>;
    input: WithOptions;
    checkbox: WithOptions;
    radio: WithOptions;
    table: WithOptions;
    rootBox: WithOptions;
    cardBox: WithOptions;
    card: WithOptions;
    actionCard: WithOptions;
    popoverBox: WithOptions;
    disclosureRoot: WithOptions;
    disclosureTrigger: WithOptions;
    disclosureContentRoot: WithOptions;
    disclosureContentInner: WithOptions;
    disclosureContent: WithOptions;
    lineItemsRoot: WithOptions;
    lineItemsDivider: WithOptions;
    lineItemsGroup: WithOptions<'primary' | 'secondary' | 'tertiary'>;
    lineItemsTitle: WithOptions<'primary' | 'secondary' | 'tertiary'>;
    lineItemsTitleDescription: WithOptions;
    lineItemsDescription: WithOptions<'primary' | 'secondary' | 'tertiary'>;
    lineItemsDescriptionInner: WithOptions;
    lineItemsDescriptionText: WithOptions;
    lineItemsDescriptionSuffix: WithOptions;
    lineItemsDescriptionPrefix: WithOptions;
    lineItemsCopyButton: WithOptions;
    lineItemsDowngradeNotice: WithOptions;
    logoBox: WithOptions;
    logoImage: WithOptions;
    header: WithOptions;
    headerTitle: WithOptions;
    headerSubtitle: WithOptions;
    headerBackLink: WithOptions;
    backRow: WithOptions;
    backLink: WithOptions;
    main: WithOptions;
    footer: WithOptions;
    footerItem: WithOptions;
    footerAction: WithOptions<CardActionId>;
    footerActionText: WithOptions;
    footerActionLink: WithOptions;
    footerPages: WithOptions;
    footerPagesLink: WithOptions<'help' | 'terms' | 'privacy'>;
    socialButtonsRoot: WithOptions;
    socialButtons: WithOptions;
    socialButtonsIconButton: WithOptions<OAuthProvider | Web3Provider, LoadingState>;
    socialButtonsBlockButton: WithOptions<OAuthProvider | Web3Provider, LoadingState>;
    socialButtonsBlockButtonText: WithOptions<OAuthProvider | Web3Provider>;
    socialButtonsProviderIcon: WithOptions<OAuthProvider | Web3Provider, LoadingState>;
    socialButtonsProviderInitialIcon: WithOptions<OAuthProvider | Web3Provider, LoadingState>;
    enterpriseButtonsProviderIcon: WithOptions<EnterpriseProvider, LoadingState>;
    providerIcon: WithOptions<OAuthProvider | Web3Provider | SamlIdpSlug, LoadingState>;
    providerInitialIcon: WithOptions<OAuthProvider | Web3Provider | SamlIdpSlug, LoadingState>;
    alternativeMethods: WithOptions;
    alternativeMethodsBlockButton: WithOptions<OAuthProvider | Web3Provider, LoadingState>;
    alternativeMethodsBlockButtonText: WithOptions<OAuthProvider | Web3Provider>;
    alternativeMethodsBlockButtonArrow: WithOptions<OAuthProvider | Web3Provider>;
    checkoutFormLineItemsRoot: WithOptions;
    checkoutFormElementsRoot: WithOptions;
    checkoutSuccessRoot: WithOptions;
    checkoutSuccessRing: WithOptions;
    checkoutSuccessBadge: WithOptions;
    checkoutSuccessTitle: WithOptions;
    checkoutSuccessDescription: WithOptions;
    otpCodeField: WithOptions;
    otpCodeFieldInputs: WithOptions;
    otpCodeFieldInput: WithOptions;
    otpCodeFieldErrorText: WithOptions;
    dividerRow: WithOptions;
    dividerText: WithOptions;
    dividerLine: WithOptions;
    drawerBackdrop: WithOptions;
    drawerContent: WithOptions;
    drawerHeader: WithOptions;
    drawerTitle: WithOptions;
    drawerBody: WithOptions;
    drawerFooter: WithOptions;
    drawerFooterTitle: WithOptions;
    drawerFooterDescription: WithOptions;
    drawerClose: WithOptions;
    drawerConfirmationBackdrop: WithOptions;
    drawerConfirmationRoot: WithOptions;
    drawerConfirmationTitle: WithOptions;
    drawerConfirmationDescription: WithOptions;
    drawerConfirmationActions: WithOptions;
    formHeader: WithOptions<never, ErrorState>;
    formHeaderTitle: WithOptions<never, ErrorState>;
    formHeaderSubtitle: WithOptions<never, ErrorState>;
    formResendCodeLink: WithOptions;
    verificationLinkStatusBox: WithOptions;
    verificationLinkStatusIconBox: WithOptions;
    verificationLinkStatusIcon: WithOptions;
    verificationLinkStatusText: WithOptions;
    form: WithOptions<never, ErrorState>;
    formContainer: WithOptions<never, ErrorState>;
    formFieldRow: WithOptions<FieldId>;
    formField: WithOptions<FieldId, ControlState>;
    formFieldLabelRow: WithOptions<FieldId, ControlState>;
    formFieldLabel: WithOptions<FieldId, ControlState>;
    formFieldRadioGroup: WithOptions;
    formFieldRadioGroupItem: WithOptions;
    formFieldRadioInput: WithOptions;
    formFieldRadioLabel: WithOptions<FieldId, ControlState>;
    formFieldRadioLabelTitle: WithOptions<FieldId, ControlState>;
    formFieldRadioLabelDescription: WithOptions<FieldId, ControlState>;
    formFieldCheckboxInput: WithOptions<FieldId, ControlState>;
    formFieldCheckboxLabel: WithOptions<FieldId, ControlState>;
    formFieldAction: WithOptions<FieldId, ControlState>;
    formFieldInput: WithOptions<FieldId, ControlState>;
    formFieldErrorText: WithOptions<FieldId, ControlState>;
    formFieldWarningText: WithOptions<FieldId, ControlState>;
    formFieldSuccessText: WithOptions<FieldId, ControlState>;
    formFieldInfoText: WithOptions<FieldId, ControlState>;
    formFieldHintText: WithOptions<FieldId, ControlState>;
    formButtonPrimary: WithOptions<never, ControlState | LoadingState>;
    formButtonReset: WithOptions<never, ControlState | LoadingState>;
    formFieldInputGroup: WithOptions;
    formFieldInputShowPasswordButton: WithOptions;
    formFieldInputShowPasswordIcon: WithOptions;
    formFieldInputCopyToClipboardButton: WithOptions;
    formFieldInputCopyToClipboardIcon: WithOptions;
    phoneInputBox: WithOptions<never, ControlState>;
    formInputGroup: WithOptions<never, ControlState>;
    segmentedControlRoot: WithOptions;
    segmentedControlButton: WithOptions;
    switchRoot: WithOptions;
    switchIndicator: WithOptions;
    switchThumb: WithOptions;
    switchLabel: WithOptions;
    avatarBox: WithOptions;
    avatarImage: WithOptions;
    avatarImageActions: WithOptions;
    avatarImageActionsUpload: WithOptions;
    avatarImageActionsRemove: WithOptions;
    userButtonBox: WithOptions<never, 'open'>;
    userButtonOuterIdentifier: WithOptions<never, 'open'>;
    userButtonTrigger: WithOptions<never, 'open'>;
    userButtonAvatarBox: WithOptions<never, 'open'>;
    userButtonAvatarImage: WithOptions<never, 'open'>;
    userButtonPopoverRootBox: WithOptions;
    userButtonPopoverCard: WithOptions;
    userButtonPopoverMain: WithOptions;
    userButtonPopoverActions: WithOptions<'singleSession' | 'multiSession'>;
    userButtonPopoverActionButton: WithOptions<'manageAccount' | 'addAccount' | 'signOut' | 'signOutAll'>;
    userButtonPopoverActionButtonIconBox: WithOptions<'manageAccount' | 'addAccount' | 'signOut' | 'signOutAll'>;
    userButtonPopoverActionButtonIcon: WithOptions<'manageAccount' | 'addAccount' | 'signOut' | 'signOutAll'>;
    userButtonPopoverCustomItemButton: WithOptions<string>;
    userButtonPopoverCustomItemButtonIconBox: WithOptions<string>;
    userButtonPopoverActionItemButtonIcon: WithOptions<string>;
    userButtonPopoverFooter: WithOptions;
    userButtonPopoverFooterPagesLink: WithOptions<'terms' | 'privacy'>;
    organizationSwitcherTrigger: WithOptions<never, 'open'>;
    organizationSwitcherTriggerIcon: WithOptions<never, 'open'>;
    organizationSwitcherPopoverRootBox: WithOptions;
    organizationSwitcherPopoverCard: WithOptions;
    organizationSwitcherPopoverMain: WithOptions;
    organizationSwitcherPopoverActions: WithOptions;
    organizationSwitcherPopoverInvitationActions: WithOptions;
    organizationSwitcherPopoverInvitationActionsBox: WithOptions;
    organizationSwitcherPopoverActionButton: WithOptions<'manageOrganization' | 'createOrganization' | 'switchOrganization'>;
    organizationSwitcherPreviewButton: WithOptions;
    organizationSwitcherInvitationAcceptButton: WithOptions;
    organizationSwitcherPopoverActionButtonIconBox: WithOptions<'manageOrganization' | 'createOrganization'>;
    organizationSwitcherPopoverActionButtonIcon: WithOptions<'manageOrganization' | 'createOrganization'>;
    organizationSwitcherPopoverFooter: WithOptions;
    organizationProfileMembersSearchInputIcon: WithOptions;
    organizationProfileMembersSearchInput: WithOptions;
    organizationListPreviewItems: WithOptions;
    organizationListPreviewItem: WithOptions;
    organizationListPreviewButton: WithOptions;
    organizationListPreviewItemActionButton: WithOptions;
    organizationListCreateOrganizationActionButton: WithOptions;
    userPreview: WithOptions<UserPreviewId>;
    userPreviewAvatarContainer: WithOptions<UserPreviewId>;
    userPreviewAvatarBox: WithOptions<UserPreviewId>;
    userPreviewAvatarImage: WithOptions<UserPreviewId>;
    userPreviewAvatarIcon: WithOptions<UserPreviewId>;
    userPreviewTextContainer: WithOptions<UserPreviewId>;
    userPreviewMainIdentifier: WithOptions<UserPreviewId>;
    userPreviewSecondaryIdentifier: WithOptions<UserPreviewId>;
    organizationPreview: WithOptions<OrganizationPreviewId>;
    organizationPreviewAvatarContainer: WithOptions<OrganizationPreviewId>;
    organizationPreviewAvatarBox: WithOptions<OrganizationPreviewId>;
    organizationPreviewAvatarImage: WithOptions<OrganizationPreviewId>;
    organizationPreviewTextContainer: WithOptions<OrganizationPreviewId>;
    organizationPreviewMainIdentifier: WithOptions<OrganizationPreviewId>;
    organizationPreviewSecondaryIdentifier: WithOptions<OrganizationPreviewId>;
    organizationAvatarUploaderContainer: WithOptions;
    membersPageInviteButton: WithOptions;
    identityPreview: WithOptions;
    identityPreviewText: WithOptions;
    identityPreviewEditButton: WithOptions;
    identityPreviewEditButtonIcon: WithOptions;
    passkeyIcon: WithOptions<'firstFactor'>;
    accountSwitcherActionButton: WithOptions<'addAccount' | 'signOutAll'>;
    accountSwitcherActionButtonIconBox: WithOptions<'addAccount' | 'signOutAll'>;
    accountSwitcherActionButtonIcon: WithOptions<'addAccount' | 'signOutAll'>;
    pricingTable: WithOptions;
    pricingTableCard: WithOptions<string>;
    pricingTableCardHeader: WithOptions;
    pricingTableCardTitleContainer: WithOptions;
    pricingTableCardTitle: WithOptions;
    pricingTableCardDescription: WithOptions;
    pricingTableCardFeeContainer: WithOptions;
    pricingTableCardFee: WithOptions;
    pricingTableCardFeePeriod: WithOptions;
    pricingTableCardPeriodToggle: WithOptions;
    pricingTableCardFeePeriodNotice: WithOptions;
    pricingTableCardBody: WithOptions;
    pricingTableCardFeatures: WithOptions;
    pricingTableCardFeaturesList: WithOptions<string>;
    pricingTableCardFeaturesListItem: WithOptions<string>;
    pricingTableCardFeaturesListItemContent: WithOptions;
    pricingTableCardFeaturesListItemTitle: WithOptions;
    pricingTableCardStatusRow: WithOptions;
    pricingTableCardStatus: WithOptions;
    pricingTableCardFooter: WithOptions;
    pricingTableCardFooterButton: WithOptions;
    pricingTableCardFooterNotice: WithOptions;
    pricingTableMatrix: WithOptions;
    pricingTableMatrixTable: WithOptions;
    pricingTableMatrixRowGroup: WithOptions;
    pricingTableMatrixRowGroupHeader: WithOptions;
    pricingTableMatrixRowGroupBody: WithOptions;
    pricingTableMatrixRow: WithOptions;
    pricingTableMatrixRowHeader: WithOptions;
    pricingTableMatrixRowBody: WithOptions;
    pricingTableMatrixColumnHeader: WithOptions;
    pricingTableMatrixCell: WithOptions;
    pricingTableMatrixCellFooter: WithOptions;
    pricingTableMatrixAvatar: WithOptions;
    pricingTableMatrixBadge: WithOptions;
    pricingTableMatrixPlanName: WithOptions;
    pricingTableMatrixFee: WithOptions;
    pricingTableMatrixFeePeriod: WithOptions;
    pricingTableMatrixFeePeriodNotice: WithOptions;
    pricingTableMatrixFeePeriodNoticeInner: WithOptions;
    pricingTableMatrixFeePeriodNoticeLabel: WithOptions;
    pricingTableMatrixFooter: WithOptions;
    planDetailHeader: WithOptions;
    planDetailAvatarBadgeContainer: WithOptions;
    planDetailAvatar: WithOptions;
    planDetailBadgeContainer: WithOptions;
    planDetailBadge: WithOptions;
    planDetailTitle: WithOptions;
    planDetailDescription: WithOptions;
    planDetailAction: WithOptions;
    planDetailFeeContainer: WithOptions;
    planDetailFee: WithOptions;
    planDetailFeePeriod: WithOptions;
    planDetailFeePeriodNotice: WithOptions;
    planDetailFeePeriodNoticeInner: WithOptions;
    planDetailFeePeriodNoticeLabel: WithOptions;
    planDetailCaption: WithOptions;
    planDetailFeatures: WithOptions;
    planDetailFeaturesList: WithOptions<string>;
    planDetailFeaturesListItem: WithOptions<string>;
    planDetailFeaturesListItemContent: WithOptions;
    planDetailFeaturesListItemTitle: WithOptions;
    planDetailFeaturesListItemDescription: WithOptions;
    planDetailPeriodToggle: WithOptions;
    alert: WithOptions<AlertId>;
    alertIcon: WithOptions<AlertId>;
    alertText: WithOptions<AlertId>;
    alertTextContainer: WithOptions<AlertId>;
    tagInputContainer: WithOptions;
    tagPillIcon: WithOptions;
    tagPillContainer: WithOptions;
    tabPanel: WithOptions;
    tabButton: WithOptions;
    tabListContainer: WithOptions;
    tableHead: WithOptions;
    paginationButton: WithOptions;
    paginationButtonIcon: WithOptions;
    paginationRowText: WithOptions<'allRowsCount' | 'rowsCount' | 'displaying'>;
    selectButton: WithOptions<SelectId>;
    selectSearchInput: WithOptions<SelectId>;
    selectButtonIcon: WithOptions<SelectId>;
    selectOptionsContainer: WithOptions<SelectId>;
    selectOption: WithOptions<SelectId>;
    paymentSourceRow: WithOptions;
    paymentSourceRowIcon: WithOptions;
    paymentSourceRowText: WithOptions;
    paymentSourceRowType: WithOptions;
    paymentSourceRowValue: WithOptions;
    paymentSourceRowBadge: WithOptions<'default' | 'expired'>;
    statementRoot: WithOptions;
    statementHeader: WithOptions;
    statementHeaderTitle: WithOptions;
    statementHeaderBadge: WithOptions;
    statementBody: WithOptions;
    statementSection: WithOptions;
    statementSectionHeader: WithOptions;
    statementHeaderTitleContainer: WithOptions;
    statementSectionHeaderTitle: WithOptions;
    statementSectionContent: WithOptions;
    statementSectionContentItem: WithOptions;
    statementSectionContentDetailsList: WithOptions;
    statementSectionContentDetailsListItem: WithOptions;
    statementSectionContentDetailsListItemLabelContainer: WithOptions;
    statementSectionContentDetailsListItemLabel: WithOptions;
    statementSectionContentDetailsListItemValue: WithOptions;
    statementSectionContentDetailsHeader: WithOptions;
    statementSectionContentDetailsHeaderItem: WithOptions;
    statementSectionContentDetailsHeaderItemIcon: WithOptions;
    statementSectionContentDetailsHeaderTitle: WithOptions;
    statementSectionContentDetailsHeaderDescription: WithOptions;
    statementSectionContentDetailsHeaderSecondaryTitle: WithOptions;
    statementSectionContentDetailsHeaderSecondaryDescription: WithOptions;
    statementFooter: WithOptions;
    statementFooterLabel: WithOptions;
    statementFooterValueContainer: WithOptions;
    statementFooterCurrency: WithOptions;
    statementFooterValue: WithOptions;
    statementCopyButton: WithOptions;
    menuButton: WithOptions<MenuId>;
    menuButtonEllipsis: WithOptions;
    menuList: WithOptions<MenuId>;
    menuItem: WithOptions<MenuId>;
    modalBackdrop: WithOptions;
    modalContent: WithOptions;
    modalCloseButton: WithOptions;
    profileSection: WithOptions<ProfileSectionId>;
    profileSectionItemList: WithOptions<ProfileSectionId>;
    profileSectionItem: WithOptions<ProfileSectionId>;
    profileSectionHeader: WithOptions<ProfileSectionId>;
    profileSectionTitle: WithOptions<ProfileSectionId>;
    profileSectionTitleText: WithOptions<ProfileSectionId>;
    profileSectionSubtitle: WithOptions<ProfileSectionId>;
    profileSectionSubtitleText: WithOptions<ProfileSectionId>;
    profileSectionContent: WithOptions<ProfileSectionId>;
    profileSectionPrimaryButton: WithOptions<ProfileSectionId>;
    profilePage: WithOptions<ProfilePageId>;
    formattedPhoneNumber: WithOptions;
    formattedPhoneNumberFlag: WithOptions;
    formattedPhoneNumberText: WithOptions;
    formattedDate: WithOptions<'tableCell'>;
    scrollBox: WithOptions;
    navbar: WithOptions;
    navbarButtons: WithOptions<never, ActiveState>;
    navbarButton: WithOptions<string, ActiveState>;
    navbarButtonIcon: WithOptions<string, ActiveState>;
    navbarButtonText: WithOptions<string, ActiveState>;
    navbarMobileMenuRow: WithOptions;
    navbarMobileMenuButton: WithOptions;
    navbarMobileMenuButtonIcon: WithOptions;
    pageScrollBox: WithOptions;
    page: WithOptions;
    activeDevice: WithOptions<'current'>;
    activeDeviceListItem: WithOptions<'current'>;
    activeDeviceIcon: WithOptions<'mobile' | 'desktop'>;
    impersonationFab: WithOptions;
    impersonationFabIcon: WithOptions;
    impersonationFabIconContainer: WithOptions;
    impersonationFabTitle: WithOptions;
    impersonationFabActionLink: WithOptions;
    tooltip: WithOptions;
    tooltipContent: WithOptions;
    tooltipText: WithOptions;
    invitationsSentIconBox: WithOptions;
    invitationsSentIcon: WithOptions;
    qrCodeRow: WithOptions;
    qrCodeContainer: WithOptions;
    badge: WithOptions<'primary' | 'actionRequired'>;
    notificationBadge: WithOptions;
    buttonArrowIcon: WithOptions;
    spinner: WithOptions;
};
type Elements = {
    [k in keyof ElementsConfig]: Selectors<ElementObjectKey<k> & string, ElementsConfig[k]>;
}[keyof ElementsConfig];
type Variables = {
    /**
     * The primary color used throughout the components. Set this to your brand color.
     * @default '#2F3037'
     */
    colorPrimary?: CssColorOrScale;
    /**
     * The color of text appearing on top of an element that with a background color of {@link Variables.colorPrimary},
     * eg: solid primary buttons.
     * @default 'white'
     */
    colorTextOnPrimaryBackground?: CssColor;
    /**
     * The color used to indicate errors or destructive actions. Set this to your brand's danger color.
     * @default '#EF4444'
     */
    colorDanger?: CssColorOrScale;
    /**
     * The color used to indicate an action that completed successfully or a positive result.
     * @default '#22C543'
     */
    colorSuccess?: CssColorOrScale;
    /**
     * The color used for potentially destructive actions or when the user's attention is required.
     * @default '#F36B16'
     */
    colorWarning?: CssColorOrScale;
    /**
     * The color that will be used as the neutral color for all the components. To achieve sufficient contrast,
     * light themes should be using dark shades ('black'), while dark themes should be using light shades ('white').
     * This option applies to borders, backgrounds for hovered elements, hovered dropdown options etc.
     * @default 'black'
     */
    colorNeutral?: CssColorOrAlphaScale;
    /**
     * The default text color.
     * @default '#212126'
     */
    colorText?: CssColor;
    /**
     * The text color for elements of lower importance, eg: a subtitle text.
     * This color is a lighter shade of {@link Variables.colorText}.
     * @default '#747686'
     */
    colorTextSecondary?: CssColor;
    /**
     * The background color for the card container.
     * @default 'white'
     */
    colorBackground?: CssColor;
    /**
     * The default text color inside input elements. To customise the input background color instead, use {@link Variables.colorInputBackground}.
     * @default 'black'
     */
    colorInputText?: CssColor;
    /**
     * The background color for all input elements.
     * @default 'white'
     */
    colorInputBackground?: CssColor;
    /**
     * The color of the avatar shimmer
     * @default 'rgba(255, 255, 255, 0.36)'
     */
    colorShimmer?: CssColor;
    /**
     * The default font that will be used in all components.
     * This can be the name of a custom font loaded by your code or the name of a web-safe font ((@link WebSafeFont})
     * If a specific fontFamily is not provided, the components will inherit the font of the parent element.
     * @default 'inherit'
     * @example
     * { fontFamily: 'Montserrat' }
     */
    fontFamily?: FontFamily;
    /**
     * The default font that will be used in all buttons. See {@link Variables.fontFamily} for details.
     * If not provided, {@link Variables.fontFamily} will be used instead.
     * @default 'inherit'
     */
    fontFamilyButtons?: FontFamily;
    /**
     * The value will be used as the base `md` to calculate all the other scale values (`xs`, `sm`, `lg` and `xl`).
     * By default, this value is relative to the root fontSize of the html element.
     * @default '0.8125rem'
     */
    fontSize?: CssLengthUnit;
    /**
     * The font weight the components will use. By default, the components will use the 400, 500, 600 and 700 weights
     * for normal, medium, semibold and bold text respectively.
     * You can override the default weights by passing a {@link FontWeightScale} object
     * @default { normal: 400, medium: 500, semibold: 600, bold: 700 };
     */
    fontWeight?: FontWeightScale;
    /**
     * The size that will be used as the `md` base borderRadius value. This is used as the base to calculate the `sm`, `lg`, `xl`,
     * our components use. As a general rule, the bigger an element is, the larger its borderRadius is going to be.
     * eg: the Card element uses 'xl'
     * @default '0.375rem'
     */
    borderRadius?: CssLengthUnit;
    /**
     * The base spacing unit that all margins, paddings and gaps between the elements are derived from.
     * @default '1rem'
     */
    spacingUnit?: CssLengthUnit;
};
type BaseThemeTaggedType = {
    __type: 'prebuilt_appearance';
};
type BaseTheme = BaseThemeTaggedType;
type Theme = {
    /**
     * A theme used as the base theme for the components.
     * For further customisation, you can use the {@link Theme.layout}, {@link Theme.variables} and {@link Theme.elements} props.
     * @example
     * import { dark } from "@clerk/themes";
     * appearance={{ baseTheme: dark }}
     */
    baseTheme?: BaseTheme | BaseTheme[];
    /**
     * Configuration options that affect the layout of the components, allowing
     * customizations that hard to implement with just CSS.
     * Eg: placing the logo outside the card element
     */
    layout?: Layout;
    /**
     * General theme overrides. This styles will be merged with our base theme.
     * Can override global styles like colors, fonts etc.
     * Eg: `colorPrimary: 'blue'`
     */
    variables?: Variables;
    /**
     * Fine-grained theme overrides. Useful when you want to style
     * specific elements or elements that under a specific state.
     * Eg: `formButtonPrimary__loading: { backgroundColor: 'gray' }`
     */
    elements?: Elements;
    /**
     * The appearance of the CAPTCHA widget.
     * This will be used to style the CAPTCHA widget.
     * Eg: `theme: 'dark'`
     */
    captcha?: CaptchaAppearanceOptions;
};
type Layout = {
    /**
     * Controls whether the logo will be rendered inside or outside the component card.
     * To customise the logo further, you can use {@link Appearance.elements}
     * @default inside
     */
    logoPlacement?: 'inside' | 'outside' | 'none';
    /**
     * The URL of your custom logo the components will display.
     * By default, the components will use the logo you've set in the Clerk Dashboard.
     * This option is helpful when you need to display different logos for different themes,
     * eg: white logo on dark themes, black logo on light themes
     * To customise the logo further, you can use {@link Appearance.elements}
     * @default undefined
     */
    logoImageUrl?: string;
    /**
     * Controls where the browser will redirect to after the user clicks the application logo,
     * usually found in the SignIn and SignUp components.
     * If a URL is provided, it will be used as the `href` of the link.
     * If a value is not passed in, the components will use the Home URL as set in the Clerk dashboard
     * @default undefined
     */
    logoLinkUrl?: string;
    /**
     * Controls the variant that will be used for the social buttons.
     * By default, the components will use block buttons if you have less than
     * 3 social providers enabled, otherwise icon buttons will be used.
     * To customise the social buttons further, you can use {@link Appearance.elements}
     * @default auto
     */
    socialButtonsVariant?: 'auto' | 'iconButton' | 'blockButton';
    /**
     * Controls whether the social buttons will be rendered above or below the card form.
     * To customise the social button container further, you can use {@link Appearance.elements}
     * @default 'top'
     */
    socialButtonsPlacement?: 'top' | 'bottom';
    /**
     * Controls whether the SignIn or SignUp forms will include optional fields.
     * You can make a field required or optional through the {@link https://dashboard.clerk.com|Clerk dashboard}.
     * @default true
     */
    showOptionalFields?: boolean;
    /**
     * This options enables the "Terms" link which is, by default, displayed on the bottom-right corner of the
     * prebuilt components. Clicking the link will open the passed URL in a new tab
     */
    termsPageUrl?: string;
    /**
     * This options enables the "Help" link which is, by default, displayed on the bottom-right corner of the
     * prebuilt components. Clicking the link will open the passed URL in a new tab
     */
    helpPageUrl?: string;
    /**
     * This options enables the "Privacy" link which is, by default, displayed on the bottom-right corner of the
     * prebuilt components. Clicking the link will open the passed URL in a new tab
     */
    privacyPageUrl?: string;
    /**
     * This option enables the shimmer animation for the avatars of <UserButton/> and <OrganizationSwitcher/>
     * @default true
     */
    shimmer?: boolean;
    /**
     * This option enables/disables animations for the components. If you want to disable animations, you can set this to false.
     * Also the prefers-reduced-motion media query is respected and animations are disabled if the user has set it to reduce motion regardless of this option.
     * @default true
     */
    animations?: boolean;
    /**
     * This option disables development mode warning.
     * We don't recommend disabling this unless you want to see a preview of how the components will look in production.
     * @default false
     */
    unsafe_disableDevelopmentModeWarnings?: boolean;
};
type CaptchaAppearanceOptions = {
    /**
     * The widget theme. Can take the following values: light, dark, auto.
     * @default 'auto'
     */
    theme?: 'auto' | 'light' | 'dark';
    /**
     * The widget size. Can take the following values: normal, flexible, compact.
     * @default 'normal'
     */
    size?: 'normal' | 'flexible' | 'compact';
    /**
     * Language to display, must be either: auto (default) to use the language that the visitor has chosen, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).
     * Refer to the list of supported languages for more information: https://developers.cloudflare.com/turnstile/reference/supported-languages
     */
    language?: string;
};
type SignInTheme = Theme;
type SignUpTheme = Theme;
type UserButtonTheme = Theme;
type UserProfileTheme = Theme;
type OrganizationSwitcherTheme = Theme;
type OrganizationListTheme = Theme;
type OrganizationProfileTheme = Theme;
type CreateOrganizationTheme = Theme;
type UserVerificationTheme = Theme;
type WaitlistTheme = Theme;
type PricingTableTheme = Theme;
type CheckoutTheme = Theme;
type PlanDetailTheme = Theme;
type Appearance<T = Theme> = T & {
    /**
     * Theme overrides that only apply to the `<SignIn/>` component
     */
    signIn?: T;
    /**
     * Theme overrides that only apply to the `<SignUp/>` component
     */
    signUp?: T;
    /**
     * Theme overrides that only apply to the `<UserButton/>` component
     */
    userButton?: T;
    /**
     * Theme overrides that only apply to the `<UserProfile/>` component
     */
    userProfile?: T;
    /**
     * Theme overrides that only apply to the `<UserVerification/>` component
     */
    userVerification?: T;
    /**
     * Theme overrides that only apply to the `<OrganizationSwitcher/>` component
     */
    organizationSwitcher?: T;
    /**
     * Theme overrides that only apply to the `<OrganizationList/>` component
     */
    organizationList?: T;
    /**
     * Theme overrides that only apply to the `<OrganizationProfile/>` component
     */
    organizationProfile?: T;
    /**
     * Theme overrides that only apply to the `<CreateOrganization />` component
     */
    createOrganization?: T;
    /**
     * Theme overrides that only apply to the `<CreateOrganization />` component
     */
    oneTap?: T;
    /**
     * Theme overrides that only apply to the `<Waitlist />` component
     */
    waitlist?: T;
    /**
     * Theme overrides that only apply to the `<PricingTable />` component
     */
    pricingTable?: T;
    /**
     * Theme overrides that only apply to the `<Checkout />` component
     */
    checkout?: T;
};

interface AuthConfigResource extends ClerkResource {
    /**
     * Enabled single session configuration at the instance level.
     */
    singleSessionMode: boolean;
    /**
     * Timestamp of when the instance was claimed. This only applies to applications created with the Keyless mode.
     * @default null
     */
    claimedAt: Date | null;
    /**
     * Whether Reverification is enabled at the instance level.
     */
    reverification: boolean;
    __internal_toSnapshot: () => AuthConfigJSONSnapshot;
}

interface ClientResource extends ClerkResource {
    sessions: SessionResource[];
    signedInSessions: SignedInSessionResource[];
    signUp: SignUpResource;
    signIn: SignInResource;
    isNew: () => boolean;
    create: () => Promise<ClientResource>;
    destroy: () => Promise<void>;
    removeSessions: () => Promise<ClientResource>;
    clearCache: () => void;
    isEligibleForTouch: () => boolean;
    buildTouchUrl: (params: {
        redirectUrl: URL;
    }) => string;
    lastActiveSessionId: string | null;
    captchaBypass: boolean;
    cookieExpiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    __internal_sendCaptchaToken: (params: unknown) => Promise<ClientResource>;
    __internal_toSnapshot: () => ClientJSONSnapshot;
    /**
     * @deprecated Use `signedInSessions` instead.
     */
    activeSessions: ActiveSessionResource[];
}

type CustomMenuItem = {
    label: string;
    href?: string;
    onClick?: () => void;
    open?: string;
    mountIcon?: (el: HTMLDivElement) => void;
    unmountIcon?: (el?: HTMLDivElement) => void;
    mount?: (el: HTMLDivElement) => void;
    unmount?: (el?: HTMLDivElement) => void;
};

type CustomPage = {
    label: string;
    url?: string;
    mountIcon?: (el: HTMLDivElement) => void;
    unmountIcon?: (el?: HTMLDivElement) => void;
    mount?: (el: HTMLDivElement) => void;
    unmount?: (el?: HTMLDivElement) => void;
};

type InstanceType = 'production' | 'development';

type LocalizationValue = string;
/**
 * A type containing all the possible localization keys the prebuilt Clerk components support.
 * Users aiming to customize a few strings can also peak at the `data-localization-key` attribute by inspecting
 * the DOM and updating the corresponding key.
 * Users aiming to completely localize the components by providing a complete translation can use
 * the default english resource object from {@link https://github.com/clerk/javascript Clerk's open source repo}
 * as a starting point.
 */
type LocalizationResource = DeepPartial<_LocalizationResource>;
type _LocalizationResource = {
    locale: string;
    maintenanceMode: LocalizationValue;
    /**
     * Add role keys and their localized values, e.g. `roles: { 'org:teacher': 'Teacher'}`.
     * @experimental
     */
    roles: {
        [r: string]: LocalizationValue;
    };
    socialButtonsBlockButton: LocalizationValue;
    /**
     * It should be used to provide a shorter variation of `socialButtonsBlockButton`.
     * It is explicitly typed, in order to avoid contributions that use LLM tools to generate
     * translations that misinterpret the correct usage of this property.
     */
    socialButtonsBlockButtonManyInView: `${string}{{provider|titleize}}${string}`;
    dividerText: LocalizationValue;
    formFieldLabel__emailAddress: LocalizationValue;
    formFieldLabel__emailAddresses: LocalizationValue;
    formFieldLabel__phoneNumber: LocalizationValue;
    formFieldLabel__username: LocalizationValue;
    formFieldLabel__emailAddress_username: LocalizationValue;
    formFieldLabel__password: LocalizationValue;
    formFieldLabel__currentPassword: LocalizationValue;
    formFieldLabel__newPassword: LocalizationValue;
    formFieldLabel__confirmPassword: LocalizationValue;
    formFieldLabel__signOutOfOtherSessions: LocalizationValue;
    formFieldLabel__automaticInvitations: LocalizationValue;
    formFieldLabel__firstName: LocalizationValue;
    formFieldLabel__lastName: LocalizationValue;
    formFieldLabel__backupCode: LocalizationValue;
    formFieldLabel__organizationName: LocalizationValue;
    formFieldLabel__organizationSlug: LocalizationValue;
    formFieldLabel__organizationDomain: LocalizationValue;
    formFieldLabel__organizationDomainEmailAddress: LocalizationValue;
    formFieldLabel__organizationDomainEmailAddressDescription: LocalizationValue;
    formFieldLabel__organizationDomainDeletePending: LocalizationValue;
    formFieldLabel__confirmDeletion: LocalizationValue;
    formFieldLabel__role: LocalizationValue;
    formFieldLabel__passkeyName: LocalizationValue;
    formFieldInputPlaceholder__emailAddress: LocalizationValue;
    formFieldInputPlaceholder__emailAddresses: LocalizationValue;
    formFieldInputPlaceholder__phoneNumber: LocalizationValue;
    formFieldInputPlaceholder__username: LocalizationValue;
    formFieldInputPlaceholder__emailAddress_username: LocalizationValue;
    formFieldInputPlaceholder__password: LocalizationValue;
    formFieldInputPlaceholder__firstName: LocalizationValue;
    formFieldInputPlaceholder__lastName: LocalizationValue;
    formFieldInputPlaceholder__backupCode: LocalizationValue;
    formFieldInputPlaceholder__organizationName: LocalizationValue;
    formFieldInputPlaceholder__organizationSlug: LocalizationValue;
    formFieldInputPlaceholder__organizationDomain: LocalizationValue;
    formFieldInputPlaceholder__organizationDomainEmailAddress: LocalizationValue;
    formFieldInputPlaceholder__confirmDeletionUserAccount: LocalizationValue;
    formFieldError__notMatchingPasswords: LocalizationValue;
    formFieldError__matchingPasswords: LocalizationValue;
    formFieldError__verificationLinkExpired: LocalizationValue;
    formFieldAction__forgotPassword: LocalizationValue;
    formFieldHintText__optional: LocalizationValue;
    formFieldHintText__slug: LocalizationValue;
    formButtonPrimary: LocalizationValue;
    formButtonPrimary__verify: LocalizationValue;
    signInEnterPasswordTitle: LocalizationValue;
    backButton: LocalizationValue;
    footerActionLink__useAnotherMethod: LocalizationValue;
    badge__primary: LocalizationValue;
    badge__thisDevice: LocalizationValue;
    badge__userDevice: LocalizationValue;
    badge__otherImpersonatorDevice: LocalizationValue;
    badge__default: LocalizationValue;
    badge__unverified: LocalizationValue;
    badge__requiresAction: LocalizationValue;
    badge__you: LocalizationValue;
    badge__currentPlan: LocalizationValue;
    badge__upcomingPlan: LocalizationValue;
    badge__activePlan: LocalizationValue;
    badge__startsAt: LocalizationValue;
    badge__endsAt: LocalizationValue;
    badge__expired: LocalizationValue;
    badge__canceledEndsAt: LocalizationValue;
    badge__renewsAt: LocalizationValue;
    footerPageLink__help: LocalizationValue;
    footerPageLink__privacy: LocalizationValue;
    footerPageLink__terms: LocalizationValue;
    paginationButton__previous: LocalizationValue;
    paginationButton__next: LocalizationValue;
    paginationRowText__displaying: LocalizationValue;
    paginationRowText__of: LocalizationValue;
    membershipRole__admin: LocalizationValue;
    membershipRole__basicMember: LocalizationValue;
    membershipRole__guestMember: LocalizationValue;
    commerce: {
        month: LocalizationValue;
        year: LocalizationValue;
        free: LocalizationValue;
        getStarted: LocalizationValue;
        manage: LocalizationValue;
        manageSubscription: LocalizationValue;
        cancelSubscription: LocalizationValue;
        keepSubscription: LocalizationValue;
        reSubscribe: LocalizationValue;
        subscribe: LocalizationValue;
        switchPlan: LocalizationValue;
        switchToMonthly: LocalizationValue;
        switchToAnnual: LocalizationValue;
        billedAnnually: LocalizationValue;
        billedMonthlyOnly: LocalizationValue;
        alwaysFree: LocalizationValue;
        accountFunds: LocalizationValue;
        defaultFreePlanActive: LocalizationValue;
        viewFeatures: LocalizationValue;
        seeAllFeatures: LocalizationValue;
        availableFeatures: LocalizationValue;
        checkout: {
            title__paymentSuccessful: LocalizationValue;
            title__subscriptionSuccessful: LocalizationValue;
            description__paymentSuccessful: LocalizationValue;
            description__subscriptionSuccessful: LocalizationValue;
            lineItems: {
                title__totalPaid: LocalizationValue;
                title__paymentMethod: LocalizationValue;
                title__statementId: LocalizationValue;
                title__subscriptionBegins: LocalizationValue;
            };
            emailForm: {
                title: LocalizationValue;
                subtitle: LocalizationValue;
            };
            downgradeNotice: LocalizationValue;
            perMonth: LocalizationValue;
        };
    };
    signUp: {
        start: {
            title: LocalizationValue;
            titleCombined: LocalizationValue;
            subtitle: LocalizationValue;
            subtitleCombined: LocalizationValue;
            actionText: LocalizationValue;
            actionLink: LocalizationValue;
            actionLink__use_phone: LocalizationValue;
            actionLink__use_email: LocalizationValue;
        };
        emailLink: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            formTitle: LocalizationValue;
            formSubtitle: LocalizationValue;
            resendButton: LocalizationValue;
            verified: {
                title: LocalizationValue;
            };
            loading: {
                title: LocalizationValue;
            };
            verifiedSwitchTab: {
                title: LocalizationValue;
                subtitle: LocalizationValue;
                subtitleNewTab: LocalizationValue;
            };
            clientMismatch: {
                title: LocalizationValue;
                subtitle: LocalizationValue;
            };
        };
        emailCode: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            formTitle: LocalizationValue;
            formSubtitle: LocalizationValue;
            resendButton: LocalizationValue;
        };
        phoneCode: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            formTitle: LocalizationValue;
            formSubtitle: LocalizationValue;
            resendButton: LocalizationValue;
        };
        continue: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            actionText: LocalizationValue;
            actionLink: LocalizationValue;
        };
        restrictedAccess: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            subtitleWaitlist: LocalizationValue;
            actionLink: LocalizationValue;
            actionText: LocalizationValue;
            blockButton__emailSupport: LocalizationValue;
            blockButton__joinWaitlist: LocalizationValue;
        };
        legalConsent: {
            continue: {
                title: LocalizationValue;
                subtitle: LocalizationValue;
            };
            checkbox: {
                label__termsOfServiceAndPrivacyPolicy: LocalizationValue;
                label__onlyPrivacyPolicy: LocalizationValue;
                label__onlyTermsOfService: LocalizationValue;
            };
        };
    };
    signIn: {
        start: {
            title: LocalizationValue;
            titleCombined: LocalizationValue;
            subtitle: LocalizationValue;
            subtitleCombined: LocalizationValue;
            actionText: LocalizationValue;
            actionLink: LocalizationValue;
            actionLink__use_email: LocalizationValue;
            actionLink__use_phone: LocalizationValue;
            actionLink__use_username: LocalizationValue;
            actionLink__use_email_username: LocalizationValue;
            actionLink__use_passkey: LocalizationValue;
            actionText__join_waitlist: LocalizationValue;
            actionLink__join_waitlist: LocalizationValue;
        };
        password: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            actionLink: LocalizationValue;
        };
        passwordPwned: {
            title: LocalizationValue;
        };
        passkey: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
        };
        forgotPasswordAlternativeMethods: {
            title: LocalizationValue;
            label__alternativeMethods: LocalizationValue;
            blockButton__resetPassword: LocalizationValue;
        };
        forgotPassword: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            subtitle_email: LocalizationValue;
            subtitle_phone: LocalizationValue;
            formTitle: LocalizationValue;
            resendButton: LocalizationValue;
        };
        resetPassword: {
            title: LocalizationValue;
            formButtonPrimary: LocalizationValue;
            successMessage: LocalizationValue;
            requiredMessage: LocalizationValue;
        };
        resetPasswordMfa: {
            detailsLabel: LocalizationValue;
        };
        emailCode: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            formTitle: LocalizationValue;
            resendButton: LocalizationValue;
        };
        emailLink: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            formTitle: LocalizationValue;
            formSubtitle: LocalizationValue;
            resendButton: LocalizationValue;
            unusedTab: {
                title: LocalizationValue;
            };
            verified: {
                title: LocalizationValue;
                subtitle: LocalizationValue;
            };
            verifiedSwitchTab: {
                subtitle: LocalizationValue;
                titleNewTab: LocalizationValue;
                subtitleNewTab: LocalizationValue;
            };
            loading: {
                title: LocalizationValue;
                subtitle: LocalizationValue;
            };
            failed: {
                title: LocalizationValue;
                subtitle: LocalizationValue;
            };
            expired: {
                title: LocalizationValue;
                subtitle: LocalizationValue;
            };
            clientMismatch: {
                title: LocalizationValue;
                subtitle: LocalizationValue;
            };
        };
        phoneCode: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            formTitle: LocalizationValue;
            resendButton: LocalizationValue;
        };
        phoneCodeMfa: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            formTitle: LocalizationValue;
            resendButton: LocalizationValue;
        };
        totpMfa: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            formTitle: LocalizationValue;
        };
        backupCodeMfa: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
        };
        alternativeMethods: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            actionLink: LocalizationValue;
            actionText: LocalizationValue;
            blockButton__emailLink: LocalizationValue;
            blockButton__emailCode: LocalizationValue;
            blockButton__phoneCode: LocalizationValue;
            blockButton__password: LocalizationValue;
            blockButton__passkey: LocalizationValue;
            blockButton__totp: LocalizationValue;
            blockButton__backupCode: LocalizationValue;
            getHelp: {
                title: LocalizationValue;
                content: LocalizationValue;
                blockButton__emailSupport: LocalizationValue;
            };
        };
        noAvailableMethods: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            message: LocalizationValue;
        };
        accountSwitcher: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            action__addAccount: LocalizationValue;
            action__signOutAll: LocalizationValue;
        };
    };
    reverification: {
        password: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            actionLink: LocalizationValue;
        };
        emailCode: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            formTitle: LocalizationValue;
            resendButton: LocalizationValue;
        };
        phoneCode: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            formTitle: LocalizationValue;
            resendButton: LocalizationValue;
        };
        phoneCodeMfa: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            formTitle: LocalizationValue;
            resendButton: LocalizationValue;
        };
        totpMfa: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            formTitle: LocalizationValue;
        };
        backupCodeMfa: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
        };
        passkey: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            blockButton__passkey: LocalizationValue;
        };
        alternativeMethods: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            actionLink: LocalizationValue;
            actionText: LocalizationValue;
            blockButton__emailCode: LocalizationValue;
            blockButton__phoneCode: LocalizationValue;
            blockButton__password: LocalizationValue;
            blockButton__totp: LocalizationValue;
            blockButton__passkey: LocalizationValue;
            blockButton__backupCode: LocalizationValue;
            getHelp: {
                title: LocalizationValue;
                content: LocalizationValue;
                blockButton__emailSupport: LocalizationValue;
            };
        };
        noAvailableMethods: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            message: LocalizationValue;
        };
    };
    userProfile: {
        mobileButton__menu: LocalizationValue;
        formButtonPrimary__continue: LocalizationValue;
        formButtonPrimary__save: LocalizationValue;
        formButtonPrimary__finish: LocalizationValue;
        formButtonPrimary__remove: LocalizationValue;
        formButtonPrimary__add: LocalizationValue;
        formButtonReset: LocalizationValue;
        navbar: {
            title: LocalizationValue;
            description: LocalizationValue;
            account: LocalizationValue;
            security: LocalizationValue;
            billing: LocalizationValue;
        };
        start: {
            headerTitle__account: LocalizationValue;
            headerTitle__security: LocalizationValue;
            profileSection: {
                title: LocalizationValue;
                primaryButton: LocalizationValue;
            };
            usernameSection: {
                title: LocalizationValue;
                primaryButton__updateUsername: LocalizationValue;
                primaryButton__setUsername: LocalizationValue;
            };
            emailAddressesSection: {
                title: LocalizationValue;
                primaryButton: LocalizationValue;
                detailsAction__primary: LocalizationValue;
                detailsAction__nonPrimary: LocalizationValue;
                detailsAction__unverified: LocalizationValue;
                destructiveAction: LocalizationValue;
            };
            phoneNumbersSection: {
                title: LocalizationValue;
                primaryButton: LocalizationValue;
                detailsAction__primary: LocalizationValue;
                detailsAction__nonPrimary: LocalizationValue;
                detailsAction__unverified: LocalizationValue;
                destructiveAction: LocalizationValue;
            };
            connectedAccountsSection: {
                title: LocalizationValue;
                primaryButton: LocalizationValue;
                actionLabel__connectionFailed: LocalizationValue;
                /**
                 * @deprecated Use `actionLabel__connectionFailed` instead.
                 */
                actionLabel__reauthorize: LocalizationValue;
                /**
                 * @deprecated Use `subtitle__disconnected` instead.
                 */
                subtitle__reauthorize: LocalizationValue;
                subtitle__disconnected: LocalizationValue;
                destructiveActionTitle: LocalizationValue;
            };
            enterpriseAccountsSection: {
                title: LocalizationValue;
            };
            passwordSection: {
                title: LocalizationValue;
                primaryButton__updatePassword: LocalizationValue;
                primaryButton__setPassword: LocalizationValue;
            };
            passkeysSection: {
                title: LocalizationValue;
                primaryButton: LocalizationValue;
                menuAction__rename: LocalizationValue;
                menuAction__destructive: LocalizationValue;
            };
            mfaSection: {
                title: LocalizationValue;
                primaryButton: LocalizationValue;
                phoneCode: {
                    destructiveActionLabel: LocalizationValue;
                    actionLabel__setDefault: LocalizationValue;
                };
                backupCodes: {
                    headerTitle: LocalizationValue;
                    title__regenerate: LocalizationValue;
                    subtitle__regenerate: LocalizationValue;
                    actionLabel__regenerate: LocalizationValue;
                };
                totp: {
                    headerTitle: LocalizationValue;
                    destructiveActionTitle: LocalizationValue;
                };
            };
            activeDevicesSection: {
                title: LocalizationValue;
                destructiveAction: LocalizationValue;
            };
            web3WalletsSection: {
                title: LocalizationValue;
                primaryButton: LocalizationValue;
                destructiveAction: LocalizationValue;
                detailsAction__nonPrimary: LocalizationValue;
            };
            dangerSection: {
                title: LocalizationValue;
                deleteAccountButton: LocalizationValue;
            };
        };
        profilePage: {
            title: LocalizationValue;
            imageFormTitle: LocalizationValue;
            imageFormSubtitle: LocalizationValue;
            imageFormDestructiveActionSubtitle: LocalizationValue;
            fileDropAreaHint: LocalizationValue;
            readonly: LocalizationValue;
            successMessage: LocalizationValue;
        };
        usernamePage: {
            successMessage: LocalizationValue;
            title__set: LocalizationValue;
            title__update: LocalizationValue;
        };
        emailAddressPage: {
            title: LocalizationValue;
            verifyTitle: LocalizationValue;
            formHint: LocalizationValue;
            emailCode: {
                /**
                 * @deprecated Use `emailAddressPage.formHint` instead.
                 */
                formHint: LocalizationValue;
                formTitle: LocalizationValue;
                formSubtitle: LocalizationValue;
                resendButton: LocalizationValue;
                successMessage: LocalizationValue;
            };
            emailLink: {
                /**
                 * @deprecated Use `emailAddressPage.formHint` instead.
                 */
                formHint: LocalizationValue;
                formTitle: LocalizationValue;
                formSubtitle: LocalizationValue;
                resendButton: LocalizationValue;
                successMessage: LocalizationValue;
            };
            enterpriseSSOLink: {
                formSubtitle: LocalizationValue;
                formButton: LocalizationValue;
            };
            removeResource: {
                title: LocalizationValue;
                messageLine1: LocalizationValue;
                messageLine2: LocalizationValue;
                successMessage: LocalizationValue;
            };
        };
        passkeyScreen: {
            title__rename: LocalizationValue;
            subtitle__rename: LocalizationValue;
            removeResource: {
                title: LocalizationValue;
                messageLine1: LocalizationValue;
            };
        };
        phoneNumberPage: {
            title: LocalizationValue;
            verifyTitle: LocalizationValue;
            verifySubtitle: LocalizationValue;
            successMessage: LocalizationValue;
            infoText: LocalizationValue;
            removeResource: {
                title: LocalizationValue;
                messageLine1: LocalizationValue;
                messageLine2: LocalizationValue;
                successMessage: LocalizationValue;
            };
        };
        connectedAccountPage: {
            title: LocalizationValue;
            formHint: LocalizationValue;
            formHint__noAccounts: LocalizationValue;
            socialButtonsBlockButton: LocalizationValue;
            successMessage: LocalizationValue;
            removeResource: {
                title: LocalizationValue;
                messageLine1: LocalizationValue;
                messageLine2: LocalizationValue;
                successMessage: LocalizationValue;
            };
        };
        web3WalletPage: {
            title: LocalizationValue;
            subtitle__availableWallets: LocalizationValue;
            subtitle__unavailableWallets: LocalizationValue;
            web3WalletButtonsBlockButton: LocalizationValue;
            successMessage: LocalizationValue;
            removeResource: {
                title: LocalizationValue;
                messageLine1: LocalizationValue;
                messageLine2: LocalizationValue;
                successMessage: LocalizationValue;
            };
        };
        passwordPage: {
            successMessage__set: LocalizationValue;
            successMessage__update: LocalizationValue;
            successMessage__signOutOfOtherSessions: LocalizationValue;
            checkboxInfoText__signOutOfOtherSessions: LocalizationValue;
            readonly: LocalizationValue;
            title__set: LocalizationValue;
            title__update: LocalizationValue;
        };
        mfaPage: {
            title: LocalizationValue;
            formHint: LocalizationValue;
        };
        mfaTOTPPage: {
            title: LocalizationValue;
            verifyTitle: LocalizationValue;
            verifySubtitle: LocalizationValue;
            successMessage: LocalizationValue;
            authenticatorApp: {
                infoText__ableToScan: LocalizationValue;
                infoText__unableToScan: LocalizationValue;
                inputLabel__unableToScan1: LocalizationValue;
                inputLabel__unableToScan2: LocalizationValue;
                buttonAbleToScan__nonPrimary: LocalizationValue;
                buttonUnableToScan__nonPrimary: LocalizationValue;
            };
            removeResource: {
                title: LocalizationValue;
                messageLine1: LocalizationValue;
                messageLine2: LocalizationValue;
                successMessage: LocalizationValue;
            };
        };
        mfaPhoneCodePage: {
            title: LocalizationValue;
            primaryButton__addPhoneNumber: LocalizationValue;
            backButton: LocalizationValue;
            subtitle__availablePhoneNumbers: LocalizationValue;
            subtitle__unavailablePhoneNumbers: LocalizationValue;
            successTitle: LocalizationValue;
            successMessage1: LocalizationValue;
            successMessage2: LocalizationValue;
            removeResource: {
                title: LocalizationValue;
                messageLine1: LocalizationValue;
                messageLine2: LocalizationValue;
                successMessage: LocalizationValue;
            };
        };
        backupCodePage: {
            title: LocalizationValue;
            title__codelist: LocalizationValue;
            subtitle__codelist: LocalizationValue;
            infoText1: LocalizationValue;
            infoText2: LocalizationValue;
            successSubtitle: LocalizationValue;
            successMessage: LocalizationValue;
            actionLabel__copy: LocalizationValue;
            actionLabel__copied: LocalizationValue;
            actionLabel__download: LocalizationValue;
            actionLabel__print: LocalizationValue;
        };
        deletePage: {
            title: LocalizationValue;
            messageLine1: LocalizationValue;
            messageLine2: LocalizationValue;
            actionDescription: LocalizationValue;
            confirm: LocalizationValue;
        };
        billingPage: {
            title: LocalizationValue;
            start: {
                headerTitle__plans: LocalizationValue;
                headerTitle__subscriptions: LocalizationValue;
                headerTitle__statements: LocalizationValue;
            };
            switchPlansSection: {
                title: LocalizationValue;
            };
            subscriptionsListSection: {
                title: LocalizationValue;
                actionLabel__switchPlan: LocalizationValue;
            };
            paymentSourcesSection: {
                title: LocalizationValue;
                add: LocalizationValue;
                addSubtitle: LocalizationValue;
                cancelButton: LocalizationValue;
                actionLabel__default: LocalizationValue;
                actionLabel__remove: LocalizationValue;
                formButtonPrimary__add: LocalizationValue;
                formButtonPrimary__pay: LocalizationValue;
                removeResource: {
                    title: LocalizationValue;
                    messageLine1: LocalizationValue;
                    messageLine2: LocalizationValue;
                    successMessage: LocalizationValue;
                };
                payWithTestCardButton: LocalizationValue;
            };
            subscriptionsSection: {
                actionLabel__default: LocalizationValue;
            };
        };
    };
    userButton: {
        action__manageAccount: LocalizationValue;
        action__signOut: LocalizationValue;
        action__signOutAll: LocalizationValue;
        action__addAccount: LocalizationValue;
    };
    organizationSwitcher: {
        personalWorkspace: LocalizationValue;
        notSelected: LocalizationValue;
        action__createOrganization: LocalizationValue;
        action__manageOrganization: LocalizationValue;
        action__invitationAccept: LocalizationValue;
        action__suggestionsAccept: LocalizationValue;
        suggestionsAcceptedLabel: LocalizationValue;
    };
    impersonationFab: {
        title: LocalizationValue;
        action__signOut: LocalizationValue;
    };
    organizationProfile: {
        navbar: {
            title: LocalizationValue;
            description: LocalizationValue;
            general: LocalizationValue;
            members: LocalizationValue;
            billing: LocalizationValue;
        };
        badge__unverified: LocalizationValue;
        badge__automaticInvitation: LocalizationValue;
        badge__automaticSuggestion: LocalizationValue;
        badge__manualInvitation: LocalizationValue;
        start: {
            headerTitle__members: LocalizationValue;
            headerTitle__general: LocalizationValue;
            profileSection: {
                title: LocalizationValue;
                primaryButton: LocalizationValue;
                uploadAction__title: LocalizationValue;
            };
        };
        profilePage: {
            title: LocalizationValue;
            successMessage: LocalizationValue;
            dangerSection: {
                title: LocalizationValue;
                leaveOrganization: {
                    title: LocalizationValue;
                    messageLine1: LocalizationValue;
                    messageLine2: LocalizationValue;
                    successMessage: LocalizationValue;
                    actionDescription: LocalizationValue;
                };
                deleteOrganization: {
                    title: LocalizationValue;
                    messageLine1: LocalizationValue;
                    messageLine2: LocalizationValue;
                    actionDescription: LocalizationValue;
                    successMessage: LocalizationValue;
                };
            };
            domainSection: {
                title: LocalizationValue;
                subtitle: LocalizationValue;
                primaryButton: LocalizationValue;
                menuAction__verify: LocalizationValue;
                menuAction__remove: LocalizationValue;
                menuAction__manage: LocalizationValue;
            };
        };
        createDomainPage: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
        };
        verifyDomainPage: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            subtitleVerificationCodeScreen: LocalizationValue;
            formTitle: LocalizationValue;
            formSubtitle: LocalizationValue;
            resendButton: LocalizationValue;
        };
        verifiedDomainPage: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            start: {
                headerTitle__enrollment: LocalizationValue;
                headerTitle__danger: LocalizationValue;
            };
            enrollmentTab: {
                subtitle: LocalizationValue;
                manualInvitationOption__label: LocalizationValue;
                manualInvitationOption__description: LocalizationValue;
                automaticInvitationOption__label: LocalizationValue;
                automaticInvitationOption__description: LocalizationValue;
                automaticSuggestionOption__label: LocalizationValue;
                automaticSuggestionOption__description: LocalizationValue;
                calloutInfoLabel: LocalizationValue;
                calloutInvitationCountLabel: LocalizationValue;
                calloutSuggestionCountLabel: LocalizationValue;
            };
            dangerTab: {
                removeDomainTitle: LocalizationValue;
                removeDomainSubtitle: LocalizationValue;
                removeDomainActionLabel__remove: LocalizationValue;
                calloutInfoLabel: LocalizationValue;
            };
        };
        invitePage: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            successMessage: LocalizationValue;
            detailsTitle__inviteFailed: LocalizationValue;
            formButtonPrimary__continue: LocalizationValue;
            selectDropdown__role: LocalizationValue;
        };
        removeDomainPage: {
            title: LocalizationValue;
            messageLine1: LocalizationValue;
            messageLine2: LocalizationValue;
            successMessage: LocalizationValue;
        };
        membersPage: {
            detailsTitle__emptyRow: LocalizationValue;
            action__invite: LocalizationValue;
            action__search: LocalizationValue;
            start: {
                headerTitle__members: LocalizationValue;
                headerTitle__invitations: LocalizationValue;
                headerTitle__requests: LocalizationValue;
            };
            activeMembersTab: {
                tableHeader__user: LocalizationValue;
                tableHeader__joined: LocalizationValue;
                tableHeader__role: LocalizationValue;
                tableHeader__actions: LocalizationValue;
                menuAction__remove: LocalizationValue;
            };
            invitedMembersTab: {
                tableHeader__invited: LocalizationValue;
                menuAction__revoke: LocalizationValue;
            };
            invitationsTab: {
                table__emptyRow: LocalizationValue;
                autoInvitations: {
                    headerTitle: LocalizationValue;
                    headerSubtitle: LocalizationValue;
                    primaryButton: LocalizationValue;
                };
            };
            requestsTab: {
                tableHeader__requested: LocalizationValue;
                menuAction__approve: LocalizationValue;
                menuAction__reject: LocalizationValue;
                table__emptyRow: LocalizationValue;
                autoSuggestions: {
                    headerTitle: LocalizationValue;
                    headerSubtitle: LocalizationValue;
                    primaryButton: LocalizationValue;
                };
            };
        };
        billingPage: {
            title: LocalizationValue;
            start: {
                headerTitle__plans: LocalizationValue;
                headerTitle__subscriptions: LocalizationValue;
                headerTitle__statements: LocalizationValue;
            };
            switchPlansSection: {
                title: LocalizationValue;
            };
            subscriptionsListSection: {
                title: LocalizationValue;
                actionLabel__switchPlan: LocalizationValue;
            };
            paymentSourcesSection: {
                title: LocalizationValue;
                add: LocalizationValue;
                addSubtitle: LocalizationValue;
                cancelButton: LocalizationValue;
                actionLabel__default: LocalizationValue;
                actionLabel__remove: LocalizationValue;
                formButtonPrimary__add: LocalizationValue;
                formButtonPrimary__pay: LocalizationValue;
                removeResource: {
                    title: LocalizationValue;
                    messageLine1: LocalizationValue;
                    messageLine2: LocalizationValue;
                    successMessage: LocalizationValue;
                };
                payWithTestCardButton: LocalizationValue;
            };
            subscriptionsSection: {
                actionLabel__default: LocalizationValue;
            };
            alerts: {
                noPermissionsToManageBilling: LocalizationValue;
            };
        };
    };
    createOrganization: {
        title: LocalizationValue;
        formButtonSubmit: LocalizationValue;
        invitePage: {
            formButtonReset: LocalizationValue;
        };
    };
    organizationList: {
        createOrganization: LocalizationValue;
        title: LocalizationValue;
        titleWithoutPersonal: LocalizationValue;
        subtitle: LocalizationValue;
        action__invitationAccept: LocalizationValue;
        invitationAcceptedLabel: LocalizationValue;
        action__suggestionsAccept: LocalizationValue;
        suggestionsAcceptedLabel: LocalizationValue;
        action__createOrganization: LocalizationValue;
    };
    unstable__errors: UnstableErrors;
    dates: {
        previous6Days: LocalizationValue;
        lastDay: LocalizationValue;
        sameDay: LocalizationValue;
        nextDay: LocalizationValue;
        next6Days: LocalizationValue;
        numeric: LocalizationValue;
    };
    waitlist: {
        start: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            formButton: LocalizationValue;
            actionText: LocalizationValue;
            actionLink: LocalizationValue;
        };
        success: {
            title: LocalizationValue;
            subtitle: LocalizationValue;
            message: LocalizationValue;
        };
    };
};
type WithParamName<T> = T & Partial<Record<`${keyof T & string}__${CamelToSnake<Exclude<FieldId, 'role'>>}`, LocalizationValue>>;
type UnstableErrors = WithParamName<{
    external_account_not_found: LocalizationValue;
    identification_deletion_failed: LocalizationValue;
    phone_number_exists: LocalizationValue;
    form_identifier_not_found: LocalizationValue;
    captcha_unavailable: LocalizationValue;
    captcha_invalid: LocalizationValue;
    passkey_not_supported: LocalizationValue;
    passkey_pa_not_supported: LocalizationValue;
    passkey_retrieval_cancelled: LocalizationValue;
    passkey_registration_cancelled: LocalizationValue;
    passkey_already_exists: LocalizationValue;
    web3_missing_identifier: LocalizationValue;
    form_password_pwned: LocalizationValue;
    form_password_pwned__sign_in: LocalizationValue;
    form_username_invalid_length: LocalizationValue;
    form_username_invalid_character: LocalizationValue;
    form_param_format_invalid: LocalizationValue;
    form_param_format_invalid__email_address: LocalizationValue;
    form_password_length_too_short: LocalizationValue;
    form_param_nil: LocalizationValue;
    form_code_incorrect: LocalizationValue;
    form_password_incorrect: LocalizationValue;
    form_password_validation_failed: LocalizationValue;
    not_allowed_access: LocalizationValue;
    form_identifier_exists: LocalizationValue;
    form_identifier_exists__email_address: LocalizationValue;
    form_identifier_exists__username: LocalizationValue;
    form_identifier_exists__phone_number: LocalizationValue;
    form_password_not_strong_enough: LocalizationValue;
    form_password_size_in_bytes_exceeded: LocalizationValue;
    form_param_value_invalid: LocalizationValue;
    passwordComplexity: {
        sentencePrefix: LocalizationValue;
        minimumLength: LocalizationValue;
        maximumLength: LocalizationValue;
        requireNumbers: LocalizationValue;
        requireLowercase: LocalizationValue;
        requireUppercase: LocalizationValue;
        requireSpecialCharacter: LocalizationValue;
    };
    session_exists: LocalizationValue;
    zxcvbn: {
        notEnough: LocalizationValue;
        couldBeStronger: LocalizationValue;
        goodPassword: LocalizationValue;
        warnings: {
            straightRow: LocalizationValue;
            keyPattern: LocalizationValue;
            simpleRepeat: LocalizationValue;
            extendedRepeat: LocalizationValue;
            sequences: LocalizationValue;
            recentYears: LocalizationValue;
            dates: LocalizationValue;
            topTen: LocalizationValue;
            topHundred: LocalizationValue;
            common: LocalizationValue;
            similarToCommon: LocalizationValue;
            wordByItself: LocalizationValue;
            namesByThemselves: LocalizationValue;
            commonNames: LocalizationValue;
            userInputs: LocalizationValue;
            pwned: LocalizationValue;
        };
        suggestions: {
            l33t: LocalizationValue;
            reverseWords: LocalizationValue;
            allUppercase: LocalizationValue;
            capitalization: LocalizationValue;
            dates: LocalizationValue;
            recentYears: LocalizationValue;
            associatedYears: LocalizationValue;
            sequences: LocalizationValue;
            repeated: LocalizationValue;
            longerKeyboardPattern: LocalizationValue;
            anotherWord: LocalizationValue;
            useWords: LocalizationValue;
            noNeed: LocalizationValue;
            pwned: LocalizationValue;
        };
    };
    form_param_max_length_exceeded: LocalizationValue;
    organization_minimum_permissions_needed: LocalizationValue;
    already_a_member_in_organization: LocalizationValue;
    organization_domain_common: LocalizationValue;
    organization_domain_blocked: LocalizationValue;
    organization_domain_exists_for_enterprise_connection: LocalizationValue;
    organization_membership_quota_exceeded: LocalizationValue;
}>;

type JSONValue = string | number | boolean | null | JSONValue[] | {
    [key: string]: JSONValue;
};
/**
 * @internal
 */
type TelemetryEvent = {
    event: string;
    /**
     * publishableKey
     */
    pk?: string;
    /**
     * secretKey
     */
    sk?: string;
    /**
     * instanceType
     */
    it: InstanceType;
    /**
     * clerkVersion
     */
    cv: string;
    /**
     * SDK
     */
    sdk?: string;
    /**
     * SDK Version
     */
    sdkv?: string;
    payload: Record<string, JSONValue>;
};
/**
 * @internal
 */
type TelemetryEventRaw<Payload = TelemetryEvent['payload']> = {
    event: TelemetryEvent['event'];
    eventSamplingRate?: number;
    payload: Payload;
};
interface TelemetryCollector {
    isEnabled: boolean;
    isDebug: boolean;
    record(event: TelemetryEventRaw): void;
}

interface WaitlistResource extends ClerkResource {
    id: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

/**
 * @inline
 */
type SDKMetadata = {
    /**
     * The npm package name of the SDK.
     */
    name: string;
    /**
     * The npm package version of the SDK.
     */
    version: string;
    /**
     * Typically this will be the `NODE_ENV` that the SDK is currently running in.
     */
    environment?: string;
};
type ListenerCallback = (emission: Resources) => void;
type UnsubscribeCallback = () => void;
type BeforeEmitCallback = (session?: SignedInSessionResource | null) => void | Promise<any>;
type SignOutCallback = () => void | Promise<any>;
type SignOutOptions = {
    /**
     * Specify a specific session to sign out. Useful for
     * multi-session applications.
     */
    sessionId?: string;
    /**
     * Specify a redirect URL to navigate to after sign out is complete.
     */
    redirectUrl?: string;
};
/**
 * @inline
 */
interface SignOut {
    (options?: SignOutOptions): Promise<void>;
    (signOutCallback?: SignOutCallback, options?: SignOutOptions): Promise<void>;
}
type ClerkEvent = keyof ClerkEventPayload;
type EventHandler<E extends ClerkEvent> = (payload: ClerkEventPayload[E]) => void;
type ClerkEventPayload = {
    status: ClerkStatus;
};
type OnEventListener = <E extends ClerkEvent>(event: E, handler: EventHandler<E>, opt?: {
    notify: boolean;
}) => void;
type OffEventListener = <E extends ClerkEvent>(event: E, handler: EventHandler<E>) => void;
/**
 * @inline
 */
type ClerkStatus = 'degraded' | 'error' | 'loading' | 'ready';
/**
 * Main Clerk SDK object.
 */
interface Clerk {
    /**
     * Clerk SDK version number.
     */
    version: string | undefined;
    /**
     * If present, contains information about the SDK that the host application is using.
     * For example, if Clerk is loaded through `@clerk/nextjs`, this would be `{ name: '@clerk/nextjs', version: '1.0.0' }`
     */
    sdkMetadata: SDKMetadata | undefined;
    /**
     * If true the bootstrapping of Clerk.load() has completed successfully.
     */
    loaded: boolean;
    /**
     * Describes the state the clerk singleton operates in:
     * - `"error"`: Clerk failed to initialize.
     * - `"loading"`: Clerk is still attempting to load.
     * - `"ready"`: Clerk singleton is fully operational.
     * - `"degraded"`: Clerk singleton is partially operational.
     */
    status: ClerkStatus;
    /**
     * @internal
     */
    __internal_getOption<K extends keyof ClerkOptions>(key: K): ClerkOptions[K];
    frontendApi: string;
    /** Clerk Publishable Key string. */
    publishableKey: string;
    /** Clerk Proxy url string. */
    proxyUrl: string | undefined;
    /** Clerk Satellite Frontend API string. */
    domain: string;
    /** Clerk Flag for satellite apps. */
    isSatellite: boolean;
    /** Clerk Instance type is defined from the Publishable key */
    instanceType: InstanceType | undefined;
    /** Clerk flag for loading Clerk in a standard browser setup */
    isStandardBrowser: boolean | undefined;
    /**
     * Indicates whether the current user has a valid signed-in client session
     */
    isSignedIn: boolean;
    /** Client handling most Clerk operations. */
    client: ClientResource | undefined;
    /** Current Session. */
    session: SignedInSessionResource | null | undefined;
    /** Active Organization */
    organization: OrganizationResource | null | undefined;
    /** Current User. */
    user: UserResource | null | undefined;
    /** Billing Object */
    billing: CommerceBillingNamespace;
    telemetry: TelemetryCollector | undefined;
    __internal_country?: string | null;
    /**
     * Signs out the current user on single-session instances, or all users on multi-session instances
     * @param signOutCallback - Optional A callback that runs after sign out completes.
     * @param options - Optional Configuration options, see {@link SignOutOptions}
     * @returns A promise that resolves when the sign out process completes.
     */
    signOut: SignOut;
    /**
     * Opens the Clerk SignIn component in a modal.
     * @param props Optional sign in configuration parameters.
     */
    openSignIn: (props?: SignInModalProps) => void;
    /**
     * Closes the Clerk SignIn modal.
     */
    closeSignIn: () => void;
    /**
     * Opens the Clerk Checkout component in a drawer.
     * @param props Optional checkout configuration parameters.
     */
    __internal_openCheckout: (props?: __internal_CheckoutProps) => void;
    /**
     * Closes the Clerk Checkout drawer.
     */
    __internal_closeCheckout: () => void;
    /**
     * Opens the Clerk PlanDetails drawer component in a drawer.
     * @param props Optional subscription details drawer configuration parameters.
     */
    __internal_openPlanDetails: (props?: __internal_PlanDetailsProps) => void;
    /**
     * Closes the Clerk PlanDetails drawer.
     */
    __internal_closePlanDetails: () => void;
    /** Opens the Clerk UserVerification component in a modal.
     * @param props Optional user verification configuration parameters.
     */
    __internal_openReverification: (props?: __internal_UserVerificationModalProps) => void;
    /**
     * Closes the Clerk user verification modal.
     */
    __internal_closeReverification: () => void;
    /**
     * Opens the Google One Tap component.
     * @param props Optional props that will be passed to the GoogleOneTap component.
     */
    openGoogleOneTap: (props?: GoogleOneTapProps) => void;
    /**
     * Opens the Google One Tap component.
     * If the component is not already open, results in a noop.
     */
    closeGoogleOneTap: () => void;
    /**
     * Opens the Clerk SignUp component in a modal.
     * @param props Optional props that will be passed to the SignUp component.
     */
    openSignUp: (props?: SignUpModalProps) => void;
    /**
     * Closes the Clerk SignUp modal.
     */
    closeSignUp: () => void;
    /**
     * Opens the Clerk UserProfile modal.
     * @param props Optional props that will be passed to the UserProfile component.
     */
    openUserProfile: (props?: UserProfileModalProps) => void;
    /**
     * Closes the Clerk UserProfile modal.
     */
    closeUserProfile: () => void;
    /**
     * Opens the Clerk OrganizationProfile modal.
     * @param props Optional props that will be passed to the OrganizationProfile component.
     */
    openOrganizationProfile: (props?: OrganizationProfileModalProps) => void;
    /**
     * Closes the Clerk OrganizationProfile modal.
     */
    closeOrganizationProfile: () => void;
    /**
     * Opens the Clerk CreateOrganization modal.
     * @param props Optional props that will be passed to the CreateOrganization component.
     */
    openCreateOrganization: (props?: CreateOrganizationModalProps) => void;
    /**
     * Closes the Clerk CreateOrganization modal.
     */
    closeCreateOrganization: () => void;
    /**
     * Opens the Clerk Waitlist modal.
     * @param props Optional props that will be passed to the Waitlist component.
     */
    openWaitlist: (props?: WaitlistModalProps) => void;
    /**
     * Closes the Clerk Waitlist modal.
     */
    closeWaitlist: () => void;
    /**
     * Mounts a sign in flow component at the target element.
     * @param targetNode Target node to mount the SignIn component.
     * @param signInProps sign in configuration parameters.
     */
    mountSignIn: (targetNode: HTMLDivElement, signInProps?: SignInProps) => void;
    /**
     * Unmount a sign in flow component from the target element.
     * If there is no component mounted at the target node, results in a noop.
     *
     * @param targetNode Target node to unmount the SignIn component from.
     */
    unmountSignIn: (targetNode: HTMLDivElement) => void;
    /**
     * Mounts a sign up flow component at the target element.
     *
     * @param targetNode Target node to mount the SignUp component.
     * @param signUpProps sign up configuration parameters.
     */
    mountSignUp: (targetNode: HTMLDivElement, signUpProps?: SignUpProps) => void;
    /**
     * Unmount a sign up flow component from the target element.
     * If there is no component mounted at the target node, results in a noop.
     *
     * @param targetNode Target node to unmount the SignUp component from.
     */
    unmountSignUp: (targetNode: HTMLDivElement) => void;
    /**
     * Mount a user button component at the target element.
     *
     * @param targetNode Target node to mount the UserButton component.
     * @param userButtonProps User button configuration parameters.
     */
    mountUserButton: (targetNode: HTMLDivElement, userButtonProps?: UserButtonProps) => void;
    /**
     * Unmount a user button component at the target element.
     * If there is no component mounted at the target node, results in a noop.
     *
     * @param targetNode Target node to unmount the UserButton component from.
     */
    unmountUserButton: (targetNode: HTMLDivElement) => void;
    /**
     * Mount a user profile component at the target element.
     *
     * @param targetNode Target to mount the UserProfile component.
     * @param userProfileProps User profile configuration parameters.
     */
    mountUserProfile: (targetNode: HTMLDivElement, userProfileProps?: UserProfileProps) => void;
    /**
     * Unmount a user profile component at the target element.
     * If there is no component mounted at the target node, results in a noop.
     *
     * @param targetNode Target node to unmount the UserProfile component from.
     */
    unmountUserProfile: (targetNode: HTMLDivElement) => void;
    /**
     * Mount an organization profile component at the target element.
     * @param targetNode Target to mount the OrganizationProfile component.
     * @param props Configuration parameters.
     */
    mountOrganizationProfile: (targetNode: HTMLDivElement, props?: OrganizationProfileProps) => void;
    /**
     * Unmount the organization profile component from the target node.
     * @param targetNode Target node to unmount the OrganizationProfile component from.
     */
    unmountOrganizationProfile: (targetNode: HTMLDivElement) => void;
    /**
     * Mount a CreateOrganization component at the target element.
     * @param targetNode Target to mount the CreateOrganization component.
     * @param props Configuration parameters.
     */
    mountCreateOrganization: (targetNode: HTMLDivElement, props?: CreateOrganizationProps) => void;
    /**
     * Unmount the CreateOrganization component from the target node.
     * @param targetNode Target node to unmount the CreateOrganization component from.
     */
    unmountCreateOrganization: (targetNode: HTMLDivElement) => void;
    /**
     * Mount an organization switcher component at the target element.
     * @param targetNode Target to mount the OrganizationSwitcher component.
     * @param props Configuration parameters.
     */
    mountOrganizationSwitcher: (targetNode: HTMLDivElement, props?: OrganizationSwitcherProps) => void;
    /**
     * Unmount the organization profile component from the target node.*
     * @param targetNode Target node to unmount the OrganizationSwitcher component from.
     */
    unmountOrganizationSwitcher: (targetNode: HTMLDivElement) => void;
    /**
     * Prefetches the data displayed by an organization switcher.
     * It can be used when `mountOrganizationSwitcher({ asStandalone: true})`, to avoid unwanted loading states.
     * This API is still under active development and may change at any moment.
     * @experimental
     * @param props Optional user verification configuration parameters.
     */
    __experimental_prefetchOrganizationSwitcher: () => void;
    /**
     * Mount an organization list component at the target element.
     * @param targetNode Target to mount the OrganizationList component.
     * @param props Configuration parameters.
     */
    mountOrganizationList: (targetNode: HTMLDivElement, props?: OrganizationListProps) => void;
    /**
     * Unmount the organization list component from the target node.*
     * @param targetNode Target node to unmount the OrganizationList component from.
     */
    unmountOrganizationList: (targetNode: HTMLDivElement) => void;
    /**
     * Mount a waitlist at the target element.
     * @param targetNode Target to mount the Waitlist component.
     * @param props Configuration parameters.
     */
    mountWaitlist: (targetNode: HTMLDivElement, props?: WaitlistProps) => void;
    /**
     * Unmount the Waitlist component from the target node.
     * @param targetNode Target node to unmount the Waitlist component from.
     */
    unmountWaitlist: (targetNode: HTMLDivElement) => void;
    /**
     * Mounts a pricing table component at the target element.
     * @param targetNode Target node to mount the PricingTable component.
     * @param props configuration parameters.
     */
    mountPricingTable: (targetNode: HTMLDivElement, props?: PricingTableProps) => void;
    /**
     * Unmount a pricing table component from the target element.
     * If there is no component mounted at the target node, results in a noop.
     *
     * @param targetNode Target node to unmount the PricingTable component from.
     */
    unmountPricingTable: (targetNode: HTMLDivElement) => void;
    /**
     * Register a listener that triggers a callback each time important Clerk resources are changed.
     * Allows to hook up at different steps in the sign up, sign in processes.
     *
     * Some important checkpoints:
     *    When there is an active session, user === session.user.
     *    When there is no active session, user and session will both be null.
     *    When a session is loading, user and session will be undefined.
     *
     * @param callback Callback function receiving the most updated Clerk resources after a change.
     * @returns - Unsubscribe callback
     */
    addListener: (callback: ListenerCallback) => UnsubscribeCallback;
    /**
     * Registers an event handler for a specific Clerk event.
     * @param event - The event name to subscribe to
     * @param handler - The callback function to execute when the event is dispatched
     * @param opt - Optional configuration object
     * @param opt.notify - If true and the event was previously dispatched, handler will be called immediately with the latest payload
     */
    on: OnEventListener;
    /**
     * Removes an event handler for a specific Clerk event.
     * @param event - The event name to unsubscribe from
     * @param handler - The callback function to remove
     */
    off: OffEventListener;
    /**
     * Registers an internal listener that triggers a callback each time `Clerk.navigate` is called.
     * Its purpose is to notify modal UI components when a navigation event occurs, allowing them to close if necessary.
     * @internal
     */
    __internal_addNavigationListener: (callback: () => void) => UnsubscribeCallback;
    /**
     * Registers the internal navigation context from UI components in order to
     * be triggered from `Clerk` methods
     * @internal
     */
    __internal_setComponentNavigationContext: (context: __internal_ComponentNavigationContext) => () => void;
    /**
     * Set the active session and organization explicitly.
     *
     * If the session param is `null`, the active session is deleted.
     * In a similar fashion, if the organization param is `null`, the current organization is removed as active.
     */
    setActive: SetActive;
    /**
     * Function used to commit a navigation after certain steps in the Clerk processes.
     */
    navigate: CustomNavigation;
    /**
     * Decorates the provided url with the auth token for development instances.
     *
     * @param {string} to
     */
    buildUrlWithAuth(to: string): string;
    /**
     * Returns the configured url where <SignIn/> is mounted or a custom sign-in page is rendered.
     *
     * @param opts A {@link RedirectOptions} object
     */
    buildSignInUrl(opts?: RedirectOptions): string;
    /**
     * Returns the configured url where <SignUp/> is mounted or a custom sign-up page is rendered.
     *
     * @param opts A {@link RedirectOptions} object
     */
    buildSignUpUrl(opts?: RedirectOptions): string;
    /**
     * Returns the url where <UserProfile /> is mounted or a custom user-profile page is rendered.
     */
    buildUserProfileUrl(): string;
    /**
     * Returns the configured url where <CreateOrganization /> is mounted or a custom create-organization page is rendered.
     */
    buildCreateOrganizationUrl(): string;
    /**
     * Returns the configured url where <OrganizationProfile /> is mounted or a custom organization-profile page is rendered.
     */
    buildOrganizationProfileUrl(): string;
    /**
     * Returns the configured afterSignInUrl of the instance.
     */
    buildAfterSignInUrl({ params }?: {
        params?: URLSearchParams;
    }): string;
    /**
     * Returns the configured afterSignInUrl of the instance.
     */
    buildAfterSignUpUrl({ params }?: {
        params?: URLSearchParams;
    }): string;
    /**
     * Returns the configured afterSignOutUrl of the instance.
     */
    buildAfterSignOutUrl(): string;
    /**
     * Returns the configured newSubscriptionRedirectUrl of the instance.
     */
    buildNewSubscriptionRedirectUrl(): string;
    /**
     * Returns the configured afterMultiSessionSingleSignOutUrl of the instance.
     */
    buildAfterMultiSessionSingleSignOutUrl(): string;
    /**
     * Returns the configured url where <Waitlist/> is mounted or a custom waitlist page is rendered.
     */
    buildWaitlistUrl(opts?: {
        initialValues?: Record<string, string>;
    }): string;
    /**
     *
     * Redirects to the provided url after decorating it with the auth token for development instances.
     *
     * @param {string} to
     */
    redirectWithAuth(to: string): Promise<unknown>;
    /**
     * Redirects to the configured URL where <SignIn/> is mounted.
     *
     * @param opts A {@link RedirectOptions} object
     */
    redirectToSignIn(opts?: SignInRedirectOptions): Promise<unknown>;
    /**
     * Redirects to the configured URL where <SignUp/> is mounted.
     *
     * @param opts A {@link RedirectOptions} object
     */
    redirectToSignUp(opts?: SignUpRedirectOptions): Promise<unknown>;
    /**
     * Redirects to the configured URL where <UserProfile/> is mounted.
     */
    redirectToUserProfile: () => Promise<unknown>;
    /**
     * Redirects to the configured URL where <OrganizationProfile /> is mounted.
     */
    redirectToOrganizationProfile: () => Promise<unknown>;
    /**
     * Redirects to the configured URL where <CreateOrganization /> is mounted.
     */
    redirectToCreateOrganization: () => Promise<unknown>;
    /**
     * Redirects to the configured afterSignIn URL.
     */
    redirectToAfterSignIn: () => void;
    /**
     * Redirects to the configured afterSignUp URL.
     */
    redirectToAfterSignUp: () => void;
    /**
     * Redirects to the configured afterSignOut URL.
     */
    redirectToAfterSignOut: () => void;
    /**
     * Redirects to the configured URL where <Waitlist/> is mounted.
     */
    redirectToWaitlist: () => void;
    /**
     * Completes a Google One Tap redirection flow started by
     * {@link Clerk.authenticateWithGoogleOneTap}
     */
    handleGoogleOneTapCallback: (signInOrUp: SignInResource | SignUpResource, params: HandleOAuthCallbackParams, customNavigate?: (to: string) => Promise<unknown>) => Promise<unknown>;
    /**
     * Completes an OAuth or SAML redirection flow started by
     * {@link Clerk.client.signIn.authenticateWithRedirect} or {@link Clerk.client.signUp.authenticateWithRedirect}
     */
    handleRedirectCallback: (params: HandleOAuthCallbackParams | HandleSamlCallbackParams, customNavigate?: (to: string) => Promise<unknown>) => Promise<unknown>;
    /**
     * Completes a Email Link flow  started by {@link Clerk.client.signIn.createEmailLinkFlow} or {@link Clerk.client.signUp.createEmailLinkFlow}
     */
    handleEmailLinkVerification: (params: HandleEmailLinkVerificationParams, customNavigate?: (to: string) => Promise<unknown>) => Promise<unknown>;
    /**
     * Authenticates user using their Metamask browser extension
     */
    authenticateWithMetamask: (params?: AuthenticateWithMetamaskParams) => Promise<unknown>;
    /**
     * Authenticates user using their Coinbase Smart Wallet and browser extension
     */
    authenticateWithCoinbaseWallet: (params?: AuthenticateWithCoinbaseWalletParams) => Promise<unknown>;
    /**
     * Authenticates user using their OKX Wallet browser extension
     */
    authenticateWithOKXWallet: (params?: AuthenticateWithOKXWalletParams) => Promise<unknown>;
    /**
     * Authenticates user using their Web3 Wallet browser extension
     */
    authenticateWithWeb3: (params: ClerkAuthenticateWithWeb3Params) => Promise<unknown>;
    /**
     * Authenticates user using a Google token generated from Google identity services.
     */
    authenticateWithGoogleOneTap: (params: AuthenticateWithGoogleOneTapParams) => Promise<SignInResource | SignUpResource>;
    /**
     * Creates an organization, adding the current user as admin.
     */
    createOrganization: (params: CreateOrganizationParams) => Promise<OrganizationResource>;
    /**
     * Retrieves a single organization by id.
     */
    getOrganization: (organizationId: string) => Promise<OrganizationResource>;
    /**
     * Handles a 401 response from Frontend API by refreshing the client and session object accordingly
     */
    handleUnauthenticated: () => Promise<unknown>;
    joinWaitlist: (params: JoinWaitlistParams) => Promise<WaitlistResource>;
    /**
     * Navigates to the next task or redirects to completion URL.
     * If the current session has pending tasks, it navigates to the next task.
     * If all tasks are complete, it navigates to the provided completion URL or defaults to the origin redirect URL (either from sign-in or sign-up).
     * @experimental
     */
    __experimental_navigateToTask: (params?: NextTaskParams) => Promise<void>;
    /**
     * This is an optional function.
     * This function is used to load cached Client and Environment resources if Clerk fails to load them from the Frontend API.
     * @internal
     */
    __internal_getCachedResources: (() => Promise<{
        client: ClientJSONSnapshot | null;
        environment: EnvironmentJSONSnapshot | null;
    }>) | undefined;
    /**
     * This function is used to reload the initial resources (Environment/Client) from the Frontend API.
     * @internal
     */
    __internal_reloadInitialResources: () => Promise<void>;
    /**
     * Internal flag indicating whether a `setActive` call is in progress. Used to prevent navigations from being
     * initiated outside of the Clerk class.
     */
    __internal_setActiveInProgress: boolean;
}
type HandleOAuthCallbackParams = TransferableOption & SignInForceRedirectUrl & SignInFallbackRedirectUrl & SignUpForceRedirectUrl & SignUpFallbackRedirectUrl & LegacyRedirectProps & {
    /**
     * Full URL or path where the SignIn component is mounted.
     */
    signInUrl?: string;
    /**
     * Full URL or path where the SignUp component is mounted.
     */
    signUpUrl?: string;
    /**
     * Full URL or path to navigate to during sign in,
     * if identifier verification is required.
     */
    firstFactorUrl?: string;
    /**
     * Full URL or path to navigate to during sign in,
     * if 2FA is enabled.
     */
    secondFactorUrl?: string;
    /**
     * Full URL or path to navigate to during sign in,
     * if the user is required to reset their password.
     */
    resetPasswordUrl?: string;
    /**
     * Full URL or path to navigate to after an incomplete sign up.
     */
    continueSignUpUrl?: string | null;
    /**
     * Full URL or path to navigate to after requesting email verification.
     */
    verifyEmailAddressUrl?: string | null;
    /**
     * Full URL or path to navigate to after requesting phone verification.
     */
    verifyPhoneNumberUrl?: string | null;
    /**
     * The underlying resource to optionally reload before processing an OAuth callback.
     */
    reloadResource?: 'signIn' | 'signUp';
};
type HandleSamlCallbackParams = HandleOAuthCallbackParams;
type CustomNavigation = (to: string, options?: NavigateOptions) => Promise<unknown> | void;
type ClerkThemeOptions = DeepSnakeToCamel<DeepPartial<DisplayThemeJSON>>;
/**
 * Navigation options used to replace or push history changes.
 * Both `routerPush` & `routerReplace` OR none options should be passed.
 */
type ClerkOptionsNavigation = {
    /**
     * A function which takes the destination path as an argument and performs a "push" navigation.
     */
    routerPush?: never;
    /**
     * A function which takes the destination path as an argument and performs a "replace" navigation.
     */
    routerReplace?: never;
    routerDebug?: boolean;
} | {
    routerPush: RouterFn;
    routerReplace: RouterFn;
    routerDebug?: boolean;
};
type ClerkOptions = PendingSessionOptions & ClerkOptionsNavigation & SignInForceRedirectUrl & SignInFallbackRedirectUrl & SignUpForceRedirectUrl & SignUpFallbackRedirectUrl & NewSubscriptionRedirectUrl & LegacyRedirectProps & AfterSignOutUrl & AfterMultiSessionSingleSignOutUrl & {
    /**
     * Optional object to style your components. Will only affect [Clerk Components](https://clerk.com/docs/components/overview) and not [Account Portal](https://clerk.com/docs/account-portal/overview) pages.
     */
    appearance?: Appearance;
    /**
     * Optional object to localize your components. Will only affect [Clerk Components](https://clerk.com/docs/components/overview) and not [Account Portal](https://clerk.com/docs/account-portal/overview) pages.
     */
    localization?: LocalizationResource;
    polling?: boolean;
    /**
     * By default, the last signed-in session is used during client initialization. This option allows you to override that behavior, e.g. by selecting a specific session.
     */
    selectInitialSession?: (client: ClientResource) => SignedInSessionResource | null;
    /**
     * By default, ClerkJS is loaded with the assumption that cookies can be set (browser setup). On native platforms this value must be set to `false`.
     */
    standardBrowser?: boolean;
    /**
     * Optional support email for display in authentication screens. Will only affect [Clerk Components](https://clerk.com/docs/components/overview) and not [Account Portal](https://clerk.com/docs/account-portal/overview) pages.
     */
    supportEmail?: string;
    /**
     * By default, the [Clerk Frontend API `touch` endpoint](https://clerk.com/docs/reference/frontend-api/tag/Sessions#operation/touchSession) is called during page focus to keep the last active session alive. This option allows you to disable this behavior.
     */
    touchSession?: boolean;
    /**
     * This URL will be used for any redirects that might happen and needs to point to your primary application on the client-side. This option is optional for production instances. **It is required to be set for a satellite application in a development instance**. It's recommended to use [the environment variable](https://clerk.com/docs/deployments/clerk-environment-variables#sign-in-and-sign-up-redirects) instead.
     */
    signInUrl?: string;
    /**
     * This URL will be used for any redirects that might happen and needs to point to your primary application on the client-side. This option is optional for production instances but **must be set for a satellite application in a development instance**. It's recommended to use [the environment variable](https://clerk.com/docs/deployments/clerk-environment-variables#sign-in-and-sign-up-redirects) instead.
     */
    signUpUrl?: string;
    /**
     * An optional array of domains to validate user-provided redirect URLs against. If no match is made, the redirect is considered unsafe and the default redirect will be used with a warning logged in the console.
     */
    allowedRedirectOrigins?: Array<string | RegExp>;
    /**
     * An optional array of protocols to validate user-provided redirect URLs against. If no match is made, the redirect is considered unsafe and the default redirect will be used with a warning logged in the console.
     */
    allowedRedirectProtocols?: Array<string>;
    /**
     * This option defines that the application is a satellite application.
     */
    isSatellite?: boolean | ((url: URL) => boolean);
    /**
     * Controls whether or not Clerk will collect [telemetry data](https://clerk.com/docs/telemetry). If set to `debug`, telemetry events are only logged to the console and not sent to Clerk.
     */
    telemetry?: false | {
        disabled?: boolean;
        /**
         * Telemetry events are only logged to the console and not sent to Clerk
         */
        debug?: boolean;
    };
    /**
     * Contains information about the SDK that the host application is using. You don't need to set this value yourself unless you're [developing an SDK](https://clerk.com/docs/references/sdk/overview).
     */
    sdkMetadata?: SDKMetadata;
    /**
     * The full URL or path to the waitlist page. If `undefined`, will redirect to the [Account Portal waitlist page](https://clerk.com/docs/account-portal/overview#waitlist).
     */
    waitlistUrl?: string;
    /**
     * Enable experimental flags to gain access to new features. These flags are not guaranteed to be stable and may change drastically in between patch or minor versions.
     */
    experimental?: Autocomplete<{
        /**
         * Persist the Clerk client to match the user's device with a client.
         * @default true
         */
        persistClient: boolean;
        /**
         * Clerk will rethrow network errors that occur while the user is offline.
         */
        rethrowOfflineNetworkErrors: boolean;
        commerce: boolean;
    }, Record<string, any>>;
    /**
     * The URL a developer should be redirected to in order to claim an instance created in Keyless mode.
     * @internal
     */
    __internal_keyless_claimKeylessApplicationUrl?: string;
    /**
     * After a developer has claimed their instance created by Keyless mode, they can use this URL to find their instance's keys
     * @internal
     */
    __internal_keyless_copyInstanceKeysUrl?: string;
    /**
     * Pass a function that will trigger the unmounting of the Keyless Prompt.
     * It should cause the values of `__internal_claimKeylessApplicationUrl` and `__internal_copyInstanceKeysUrl` to become undefined.
     * @internal
     */
    __internal_keyless_dismissPrompt?: (() => Promise<void>) | null;
};
interface NavigateOptions {
    replace?: boolean;
    metadata?: RouterMetadata;
}
interface Resources {
    client: ClientResource;
    session?: SignedInSessionResource | null;
    user?: UserResource | null;
    organization?: OrganizationResource | null;
}
type RoutingStrategy = 'path' | 'hash' | 'virtual';
/**
 * Internal is a navigation type that affects the component
 *
 */
type NavigationType = 
/**
 * Internal navigations affect the components and alter the
 * part of the URL that comes after the `path` passed to the component.
 * eg  <SignIn path='sign-in'>
 * going from /sign-in to /sign-in/factor-one is an internal navigation
 */
'internal'
/**
 * Internal navigations affect the components and alter the
 * part of the URL that comes before the `path` passed to the component.
 * eg  <SignIn path='sign-in'>
 * going from /sign-in to / is an external navigation
 */
 | 'external'
/**
 * Window navigations are navigations towards a different origin
 * and are not handled by the Clerk component or the host app router.
 */
 | 'window';
type RouterMetadata = {
    routing?: RoutingStrategy;
    navigationType?: NavigationType;
};
/**
 * @inline
 */
type RouterFn = (
/**
 * The destination path
 */
to: string, 
/**
 * Optional metadata
 */
metadata?: {
    /**
     * @internal
     */
    __internal_metadata?: RouterMetadata;
    /**
     * Provide a function to be used for navigation.
     */
    windowNavigate: (to: URL | string) => void;
}) => Promise<unknown> | unknown;
type WithoutRouting<T> = Omit<T, 'path' | 'routing'>;
type SignInInitialValues = {
    emailAddress?: string;
    phoneNumber?: string;
    username?: string;
};
type SignUpInitialValues = {
    emailAddress?: string;
    phoneNumber?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
};
type SignInRedirectOptions = RedirectOptions & RedirectUrlProp & {
    /**
     * Initial values that are used to prefill the sign in form.
     */
    initialValues?: SignInInitialValues;
};
type SignUpRedirectOptions = RedirectOptions & RedirectUrlProp & {
    /**
     * Initial values that are used to prefill the sign up form.
     */
    initialValues?: SignUpInitialValues;
};
/**
 * The parameters for the `setActive()` method.
 * @interface
 */
type SetActiveParams = {
    /**
     * The session resource or session ID (string version) to be set as active. If `null`, the current session is deleted.
     */
    session?: SignedInSessionResource | string | null;
    /**
     * The organization resource or organization ID/slug (string version) to be set as active in the current session. If `null`, the currently active organization is removed as active.
     */
    organization?: OrganizationResource | string | null;
    /**
     * @deprecated Use `redirectUrl` instead.
     *
     * Callback run just before the active session and/or organization is set to the passed object. Can be used to set up for pre-navigation actions.
     */
    beforeEmit?: BeforeEmitCallback;
    /**
     * The full URL or path to redirect to just before the active session and/or organization is set.
     */
    redirectUrl?: string;
};
/**
 * @inline
 */
type SetActive = (setActiveParams: SetActiveParams) => Promise<void>;
type RoutingOptions = {
    path: string | undefined;
    routing?: Extract<RoutingStrategy, 'path'>;
} | {
    path?: never;
    routing?: Extract<RoutingStrategy, 'hash' | 'virtual'>;
};
type SignInProps = RoutingOptions & {
    /**
     * Full URL or path to navigate to after successful sign in.
     * This value has precedence over other redirect props, environment variables or search params.
     * Use this prop to override the redirect URL when needed.
     * @default undefined
     */
    forceRedirectUrl?: string | null;
    /**
     * Full URL or path to navigate to after successful sign in.
     * This value is used when no other redirect props, environment variables or search params are present.
     * @default undefined
     */
    fallbackRedirectUrl?: string | null;
    /**
     * Full URL or path to for the sign in process.
     * Used to fill the "Sign in" link in the SignUp component.
     */
    signInUrl?: string;
    /**
     * Full URL or path to for the sign up process.
     * Used to fill the "Sign up" link in the SignUp component.
     */
    signUpUrl?: string;
    /**
     * Customisation options to fully match the Clerk components to your own brand.
     * These options serve as overrides and will be merged with the global `appearance`
     * prop of ClerkProvider (if one is provided)
     */
    appearance?: SignInTheme;
    /**
     * Initial values that are used to prefill the sign in or up forms.
     */
    initialValues?: SignInInitialValues & SignUpInitialValues;
    /**
     * Enable experimental flags to gain access to new features. These flags are not guaranteed to be stable and may change drastically in between patch or minor versions.
     */
    __experimental?: Record<string, any> & {
        newComponents?: boolean;
    };
    /**
     * Full URL or path to for the waitlist process.
     * Used to fill the "Join waitlist" link in the SignUp component.
     */
    waitlistUrl?: string;
    /**
     * Additional arbitrary metadata to be stored alongside the User object
     */
    unsafeMetadata?: SignUpUnsafeMetadata;
    /**
     * Enable sign-in-or-up flow for `<SignIn />` component instance.
     */
    withSignUp?: boolean;
    /**
     * Control whether OAuth flows use redirects or popups.
     */
    oauthFlow?: 'auto' | 'redirect' | 'popup';
} & TransferableOption & SignUpForceRedirectUrl & SignUpFallbackRedirectUrl & LegacyRedirectProps & AfterSignOutUrl;
interface TransferableOption {
    /**
     * Indicates whether or not sign in attempts are transferable to the sign up flow.
     * When set to false, prevents opaque sign ups when a user attempts to sign in via OAuth with an email that doesn't exist.
     * @default true
     */
    transferable?: boolean;
}
type SignInModalProps = WithoutRouting<SignInProps>;
type __internal_UserVerificationProps = RoutingOptions & {
    /**
     * Non-awaitable callback for when verification is completed successfully
     */
    afterVerification?: () => void;
    /**
     * Non-awaitable callback for when verification is cancelled, (i.e modal is closed)
     */
    afterVerificationCancelled?: () => void;
    /**
     * Defines the steps of the verification flow.
     * When `multiFactor` is used, the user will be prompt for a first factor flow followed by a second factor flow.
     * @default `'secondFactor'`
     */
    level?: SessionVerificationLevel;
    /**
     * Customisation options to fully match the Clerk components to your own brand.
     * These options serve as overrides and will be merged with the global `appearance`
     * prop of ClerkProvider (if one is provided)
     */
    appearance?: UserVerificationTheme;
};
type __internal_UserVerificationModalProps = WithoutRouting<__internal_UserVerificationProps>;
type __internal_ComponentNavigationContext = {
    /**
     * The `navigate` reference within the component router context
     */
    navigate: (to: string, options?: {
        searchParams?: URLSearchParams;
    }) => Promise<unknown>;
    /**
     * This path represents the root route for a specific component type and is used
     * for internal routing and navigation.
     *
     * @example
     * indexPath: '/sign-in'  // When <SignIn path='/sign-in' />
     * indexPath: '/sign-up'  // When <SignUp path='/sign-up' />
     */
    indexPath: string;
};
type GoogleOneTapRedirectUrlProps = SignInForceRedirectUrl & SignUpForceRedirectUrl;
type GoogleOneTapProps = GoogleOneTapRedirectUrlProps & {
    /**
     * Whether to cancel the Google One Tap request if a user clicks outside the prompt.
     * @default true
     */
    cancelOnTapOutside?: boolean;
    /**
     * Enables upgraded One Tap UX on ITP browsers.
     * Turning this options off, would hide any One Tap UI in such browsers.
     * @default true
     */
    itpSupport?: boolean;
    /**
     * FedCM enables more private sign-in flows without requiring the use of third-party cookies.
     * The browser controls user settings, displays user prompts, and only contacts an Identity Provider such as Google after explicit user consent is given.
     * Backwards compatible with browsers that still support third-party cookies.
     * @default true
     */
    fedCmSupport?: boolean;
    appearance?: SignInTheme;
};
type SignUpProps = RoutingOptions & {
    /**
     * Full URL or path to navigate to after successful sign up.
     * This value has precedence over other redirect props, environment variables or search params.
     * Use this prop to override the redirect URL when needed.
     * @default undefined
     */
    forceRedirectUrl?: string | null;
    /**
     * Full URL or path to navigate to after successful sign up.
     * This value is used when no other redirect props, environment variables or search params are present.
     * @default undefined
     */
    fallbackRedirectUrl?: string | null;
    /**
     * Full URL or path to for the sign in process.
     * Used to fill the "Sign in" link in the SignUp component.
     */
    signInUrl?: string;
    /**
     * Customisation options to fully match the Clerk components to your own brand.
     * These options serve as overrides and will be merged with the global `appearance`
     * prop of ClerkProvider (if one is provided)
     */
    appearance?: SignUpTheme;
    /**
     * Additional arbitrary metadata to be stored alongside the User object
     */
    unsafeMetadata?: SignUpUnsafeMetadata;
    /**
     * Initial values that are used to prefill the sign up form.
     */
    initialValues?: SignUpInitialValues;
    /**
     * Enable experimental flags to gain access to new features. These flags are not guaranteed to be stable and may change drastically in between patch or minor versions.
     */
    __experimental?: Record<string, any> & {
        newComponents?: boolean;
    };
    /**
     * Full URL or path to for the waitlist process.
     * Used to fill the "Join waitlist" link in the SignUp component.
     */
    waitlistUrl?: string;
    /**
     * Control whether OAuth flows use redirects or popups.
     */
    oauthFlow?: 'auto' | 'redirect' | 'popup';
} & SignInFallbackRedirectUrl & SignInForceRedirectUrl & LegacyRedirectProps & AfterSignOutUrl;
type SignUpModalProps = WithoutRouting<SignUpProps>;
type UserProfileProps = RoutingOptions & {
    /**
     * Customisation options to fully match the Clerk components to your own brand.
     * These options serve as overrides and will be merged with the global `appearance`
     * prop of ClerkProvider (if one is provided)
     */
    appearance?: UserProfileTheme;
    additionalOAuthScopes?: Partial<Record<OAuthProvider, OAuthScope[]>>;
    customPages?: CustomPage[];
    /**
     * Specify on which page the user profile modal will open.
     * @experimental
     **/
    __experimental_startPath?: string;
};
type UserProfileModalProps = WithoutRouting<UserProfileProps>;
type OrganizationProfileProps = RoutingOptions & {
    /**
     * Full URL or path to navigate to after the user leaves the currently active organization.
     * @default undefined
     */
    afterLeaveOrganizationUrl?: string;
    /**
     * Customisation options to fully match the Clerk components to your own brand.
     * These options serve as overrides and will be merged with the global `appearance`
     * prop of ClerkProvider (if one is provided)
     */
    appearance?: OrganizationProfileTheme;
    customPages?: CustomPage[];
};
type OrganizationProfileModalProps = WithoutRouting<OrganizationProfileProps>;
type CreateOrganizationProps = RoutingOptions & {
    /**
     * Full URL or path to navigate to after creating a new organization.
     * @default undefined
     */
    afterCreateOrganizationUrl?: ((organization: OrganizationResource) => string) | LooseExtractedParams<PrimitiveKeys<OrganizationResource>>;
    /**
     * Hides the screen for sending invitations after an organization is created.
     * @default undefined When left undefined Clerk will automatically hide the screen if
     * the number of max allowed members is equal to 1
     */
    skipInvitationScreen?: boolean;
    /**
     * Customisation options to fully match the Clerk components to your own brand.
     * These options serve as overrides and will be merged with the global `appearance`
     * prop of ClerkProvider (if one is provided)
     */
    appearance?: CreateOrganizationTheme;
    /**
     * Hides the optional "slug" field in the organization creation screen.
     * @default false
     */
    hideSlug?: boolean;
};
type CreateOrganizationModalProps = WithoutRouting<CreateOrganizationProps>;
type UserProfileMode = 'modal' | 'navigation';
type UserButtonProfileMode = {
    userProfileUrl?: never;
    userProfileMode?: Extract<UserProfileMode, 'modal'>;
} | {
    userProfileUrl: string;
    userProfileMode?: Extract<UserProfileMode, 'navigation'>;
};
type UserButtonProps = UserButtonProfileMode & {
    /**
     * Controls if the username is displayed next to the trigger button
     */
    showName?: boolean;
    /**
     * Controls the default state of the UserButton
     */
    defaultOpen?: boolean;
    /**
     * If true the `<UserButton />` will only render the popover.
     * Enables developers to implement a custom dialog.
     * This API is experimental and may change at any moment.
     * @experimental
     * @default undefined
     */
    __experimental_asStandalone?: boolean | ((opened: boolean) => void);
    /**
     * Full URL or path to navigate to after sign out is complete
     * @deprecated Configure `afterSignOutUrl` as a global configuration, either in `<ClerkProvider/>` or in `await Clerk.load()`.
     */
    afterSignOutUrl?: string;
    /**
     * Full URL or path to navigate to after signing out the current user is complete.
     * This option applies to multi-session applications.
     * @deprecated Configure `afterMultiSessionSingleSignOutUrl` as a global configuration, either in `<ClerkProvider/>` or in `await Clerk.load()`.
     */
    afterMultiSessionSingleSignOutUrl?: string;
    /**
     * Full URL or path to navigate to on "Add another account" action.
     * Multi-session mode only.
     */
    signInUrl?: string;
    /**
     * Full URL or path to navigate to after successful account change.
     * Multi-session mode only.
     */
    afterSwitchSessionUrl?: string;
    /**
     * Customisation options to fully match the Clerk components to your own brand.
     * These options serve as overrides and will be merged with the global `appearance`
     * prop of ClerkProvider (if one is provided)
     */
    appearance?: UserButtonTheme;
    userProfileProps?: Pick<UserProfileProps, 'additionalOAuthScopes' | 'appearance' | 'customPages'>;
    customMenuItems?: CustomMenuItem[];
};
type PrimitiveKeys<T> = {
    [K in keyof T]: T[K] extends string | boolean | number | null ? K : never;
}[keyof T];
type LooseExtractedParams<T extends string> = Autocomplete<`:${T}`>;
type OrganizationProfileMode = {
    organizationProfileUrl: string;
    organizationProfileMode?: 'navigation';
} | {
    organizationProfileUrl?: never;
    organizationProfileMode?: 'modal';
};
type CreateOrganizationMode = {
    createOrganizationUrl: string;
    createOrganizationMode?: 'navigation';
} | {
    createOrganizationUrl?: never;
    createOrganizationMode?: 'modal';
};
type OrganizationSwitcherProps = CreateOrganizationMode & OrganizationProfileMode & {
    /**
     * Controls the default state of the OrganizationSwitcher
     */
    defaultOpen?: boolean;
    /**
     * If true, `<OrganizationSwitcher />` will only render the popover.
     * Enables developers to implement a custom dialog.
     * This API is experimental and may change at any moment.
     * @experimental
     * @default undefined
     */
    __experimental_asStandalone?: boolean | ((opened: boolean) => void);
    /**
     * By default, users can switch between organization and their personal account.
     * This option controls whether OrganizationSwitcher will include the user's personal account
     * in the organization list. Setting this to `false` will hide the personal account entry,
     * and users will only be able to switch between organizations.
     * @default true
     */
    hidePersonal?: boolean;
    /**
     * Full URL or path to navigate to after a successful organization switch.
     * @default undefined
     * @deprecated Use `afterSelectOrganizationUrl` or `afterSelectPersonalUrl`.
     */
    afterSwitchOrganizationUrl?: string;
    /**
     * Full URL or path to navigate to after creating a new organization.
     * @default undefined
     */
    afterCreateOrganizationUrl?: ((organization: OrganizationResource) => string) | LooseExtractedParams<PrimitiveKeys<OrganizationResource>>;
    /**
     * Full URL or path to navigate to after a successful organization selection.
     * Accepts a function that returns URL or path
     * @default undefined`
     */
    afterSelectOrganizationUrl?: ((organization: OrganizationResource) => string) | LooseExtractedParams<PrimitiveKeys<OrganizationResource>>;
    /**
     * Full URL or path to navigate to after a successful selection of personal workspace.
     * Accepts a function that returns URL or path
     * @default undefined
     */
    afterSelectPersonalUrl?: ((user: UserResource) => string) | LooseExtractedParams<PrimitiveKeys<UserResource>>;
    /**
     * Full URL or path to navigate to after the user leaves the currently active organization.
     * @default undefined
     */
    afterLeaveOrganizationUrl?: string;
    /**
     * Hides the screen for sending invitations after an organization is created.
     * @default undefined When left undefined Clerk will automatically hide the screen if
     * the number of max allowed members is equal to 1
     */
    skipInvitationScreen?: boolean;
    /**
     * Hides the optional "slug" field in the organization creation screen.
     * @default false
     */
    hideSlug?: boolean;
    /**
     * Customisation options to fully match the Clerk components to your own brand.
     * These options serve as overrides and will be merged with the global `appearance`
     * prop of ClerkProvider(if one is provided)
     */
    appearance?: OrganizationSwitcherTheme;
    organizationProfileProps?: Pick<OrganizationProfileProps, 'appearance' | 'customPages'>;
};
type OrganizationListProps = {
    /**
     * Full URL or path to navigate to after creating a new organization.
     * @default undefined
     */
    afterCreateOrganizationUrl?: ((organization: OrganizationResource) => string) | LooseExtractedParams<PrimitiveKeys<OrganizationResource>>;
    /**
     * Full URL or path to navigate to after a successful organization selection.
     * Accepts a function that returns URL or path
     * @default undefined`
     */
    afterSelectOrganizationUrl?: ((organization: OrganizationResource) => string) | LooseExtractedParams<PrimitiveKeys<OrganizationResource>>;
    /**
     * Customisation options to fully match the Clerk components to your own brand.
     * These options serve as overrides and will be merged with the global `appearance`
     * prop of ClerkProvider (if one is provided)
     */
    appearance?: OrganizationListTheme;
    /**
     * Hides the screen for sending invitations after an organization is created.
     * @default undefined When left undefined Clerk will automatically hide the screen if
     * the number of max allowed members is equal to 1
     */
    skipInvitationScreen?: boolean;
    /**
     * By default, users can switch between organization and their personal account.
     * This option controls whether OrganizationList will include the user's personal account
     * in the organization list. Setting this to `false` will hide the personal account entry,
     * and users will only be able to switch between organizations.
     * @default true
     */
    hidePersonal?: boolean;
    /**
     * Full URL or path to navigate to after a successful selection of personal workspace.
     * Accepts a function that returns URL or path
     * @default undefined`
     */
    afterSelectPersonalUrl?: ((user: UserResource) => string) | LooseExtractedParams<PrimitiveKeys<UserResource>>;
    /**
     * Hides the optional "slug" field in the organization creation screen.
     * @default false
     */
    hideSlug?: boolean;
};
type WaitlistProps = {
    /**
     * Full URL or path to navigate to after join waitlist.
     */
    afterJoinWaitlistUrl?: string;
    /**
     * Customisation options to fully match the Clerk components to your own brand.
     * These options serve as overrides and will be merged with the global `appearance`
     * prop of ClerkProvided (if one is provided)
     */
    appearance?: WaitlistTheme;
    /**
     * Full URL or path where the SignIn component is mounted.
     */
    signInUrl?: string;
};
type WaitlistModalProps = WaitlistProps;
type PricingTableDefaultProps = {
    ctaPosition?: 'top' | 'bottom';
    collapseFeatures?: boolean;
    newSubscriptionRedirectUrl?: string;
};
type PricingTableBaseProps = {
    forOrganizations?: boolean;
    appearance?: PricingTableTheme;
    __internal_CheckoutProps?: Pick<__internal_CheckoutProps, 'appearance'>;
};
type PortalRoot = HTMLElement | null | undefined;
type PricingTableProps = PricingTableBaseProps & PricingTableDefaultProps;
type __internal_CheckoutProps = {
    appearance?: CheckoutTheme;
    planId?: string;
    planPeriod?: CommerceSubscriptionPlanPeriod;
    subscriberType?: CommerceSubscriberType;
    onSubscriptionComplete?: () => void;
    portalId?: string;
    portalRoot?: PortalRoot;
    /**
     * Full URL or path to navigate to after checkout is complete and the user clicks the "Continue" button.
     * @default undefined
     */
    newSubscriptionRedirectUrl?: string;
};
type __internal_PlanDetailsProps = {
    appearance?: PlanDetailTheme;
    plan?: CommercePlanResource;
    subscriberType?: CommerceSubscriberType;
    planPeriod?: CommerceSubscriptionPlanPeriod;
    onSubscriptionCancel?: () => void;
    portalId?: string;
    portalRoot?: PortalRoot;
};
interface HandleEmailLinkVerificationParams {
    /**
     * Full URL or path to navigate to after successful magic link verification
     * on completed sign up or sign in on the same device.
     */
    redirectUrlComplete?: string;
    /**
     * Full URL or path to navigate to after successful magic link verification
     * on the same device, but not completed sign in or sign up.
     */
    redirectUrl?: string;
    /**
     * Callback function to be executed after successful magic link
     * verification on another device.
     */
    onVerifiedOnOtherDevice?: () => void;
}
type ButtonPropsModal<T extends SignInProps | SignUpProps> = {
    mode: 'modal';
    appearance?: T['appearance'];
};
type ButtonPropsRedirect = {
    mode?: 'redirect';
};
type ButtonProps<T extends SignInProps | SignUpProps> = ButtonPropsModal<T> | ButtonPropsRedirect;
type SignInButtonProps = ButtonProps<SignInProps> & Pick<SignInProps, 'fallbackRedirectUrl' | 'forceRedirectUrl' | 'signUpForceRedirectUrl' | 'signUpFallbackRedirectUrl' | 'initialValues' | 'withSignUp' | 'oauthFlow'>;
type SignUpButtonProps = {
    unsafeMetadata?: SignUpUnsafeMetadata;
} & ButtonProps<SignUpProps> & Pick<SignUpProps, 'fallbackRedirectUrl' | 'forceRedirectUrl' | 'signInForceRedirectUrl' | 'signInFallbackRedirectUrl' | 'initialValues' | 'oauthFlow'>;
type CreateOrganizationInvitationParams = {
    emailAddress: string;
    role: OrganizationCustomRoleKey;
};
type CreateBulkOrganizationInvitationParams = {
    emailAddresses: string[];
    role: OrganizationCustomRoleKey;
};
/**
 * @interface
 */
interface CreateOrganizationParams {
    /**
     * The name of the organization.
     */
    name: string;
    /**
     * The slug of the organization.
     */
    slug?: string;
}
interface ClerkAuthenticateWithWeb3Params {
    customNavigate?: (to: string) => Promise<unknown>;
    redirectUrl?: string;
    signUpContinueUrl?: string;
    unsafeMetadata?: SignUpUnsafeMetadata;
    strategy: Web3Strategy;
    legalAccepted?: boolean;
    secondFactorUrl?: string;
}
type JoinWaitlistParams = {
    emailAddress: string;
};
interface AuthenticateWithMetamaskParams {
    customNavigate?: (to: string) => Promise<unknown>;
    redirectUrl?: string;
    signUpContinueUrl?: string;
    unsafeMetadata?: SignUpUnsafeMetadata;
    legalAccepted?: boolean;
}
interface AuthenticateWithCoinbaseWalletParams {
    customNavigate?: (to: string) => Promise<unknown>;
    redirectUrl?: string;
    signUpContinueUrl?: string;
    unsafeMetadata?: SignUpUnsafeMetadata;
    legalAccepted?: boolean;
}
interface AuthenticateWithOKXWalletParams {
    customNavigate?: (to: string) => Promise<unknown>;
    redirectUrl?: string;
    signUpContinueUrl?: string;
    unsafeMetadata?: SignUpUnsafeMetadata;
    legalAccepted?: boolean;
}
interface AuthenticateWithGoogleOneTapParams {
    token: string;
    legalAccepted?: boolean;
}
interface NextTaskParams {
    /**
     * Full URL or path to navigate to after successfully resolving all tasks
     * @default undefined
     */
    redirectUrlComplete?: string;
}
interface LoadedClerk extends Clerk {
    client: ClientResource;
}

interface EnvironmentResource extends ClerkResource {
    userSettings: UserSettingsResource;
    organizationSettings: OrganizationSettingsResource;
    authConfig: AuthConfigResource;
    displayConfig: DisplayConfigResource;
    commerceSettings: CommerceSettingsResource;
    isSingleSession: () => boolean;
    isProduction: () => boolean;
    isDevelopmentOrStaging: () => boolean;
    onWindowLocationHost: () => boolean;
    maintenanceMode: boolean;
    __internal_toSnapshot: () => EnvironmentJSONSnapshot;
}

/**
 * @inline
 */
type CheckAuthorizationSignedOut = undefined;
/**
 * @inline
 */
type CheckAuthorizationWithoutOrgOrUser = (params: Parameters<CheckAuthorizationWithCustomPermissions>[0]) => false;
/**
 * @inline
 */
type UseAuthReturn = {
    /**
     * A boolean that indicates whether Clerk has completed initialization. Initially `false`, becomes `true` once Clerk loads.
     */
    isLoaded: false;
    /**
     * A boolean that indicates whether a user is currently signed in.
     */
    isSignedIn: undefined;
    /**
     * The ID of the current user.
     */
    userId: undefined;
    /**
     * The ID for the current session.
     */
    sessionId: undefined;
    /**
     * The current user's [session claims](https://clerk.com/docs/backend-requests/resources/session-tokens).
     */
    sessionClaims: undefined;
    /**
     * The JWT actor for the session. Holds identifier for the user that is impersonating the current user. Read more about [impersonation](https://clerk.com/docs/users/user-impersonation).
     */
    actor: undefined;
    /**
     * The ID of the user's active organization.
     */
    orgId: undefined;
    /**
     * The current user's role in their active organization.
     */
    orgRole: undefined;
    /**
     * The URL-friendly identifier of the user's active organization.
     */
    orgSlug: undefined;
    /**
     * A function that checks if the user has specific permissions or roles. See the [reference doc](https://clerk.com/docs/references/backend/types/auth-object#has).
     */
    has: CheckAuthorizationSignedOut;
    /**
     * A function that signs out the current user. Returns a promise that resolves when complete. See the [reference doc](https://clerk.com/docs/references/javascript/clerk#sign-out).
     */
    signOut: SignOut;
    /**
     * A function that retrieves the current user's session token or a custom JWT template. Returns a promise that resolves to the token. See the [reference doc](https://clerk.com/docs/references/javascript/session#get-token).
     */
    getToken: GetToken;
} | {
    isLoaded: true;
    isSignedIn: false;
    userId: null;
    sessionId: null;
    sessionClaims: null;
    actor: null;
    orgId: null;
    orgRole: null;
    orgSlug: null;
    has: CheckAuthorizationWithoutOrgOrUser;
    signOut: SignOut;
    getToken: GetToken;
} | {
    isLoaded: true;
    isSignedIn: true;
    userId: string;
    sessionId: string;
    sessionClaims: JwtPayload;
    actor: ActClaim | null;
    orgId: null;
    orgRole: null;
    orgSlug: null;
    has: CheckAuthorizationWithCustomPermissions;
    signOut: SignOut;
    getToken: GetToken;
} | {
    isLoaded: true;
    isSignedIn: true;
    userId: string;
    sessionId: string;
    sessionClaims: JwtPayload;
    actor: ActClaim | null;
    orgId: string;
    orgRole: OrganizationCustomRoleKey;
    orgSlug: string | null;
    has: CheckAuthorizationWithCustomPermissions;
    signOut: SignOut;
    getToken: GetToken;
};
/**
 * @inline
 */
type UseSignInReturn = {
    /**
     * A boolean that indicates whether Clerk has completed initialization. Initially `false`, becomes `true` once Clerk loads.
     */
    isLoaded: false;
    /**
     * An object that contains the current sign-in attempt status and methods to create a new sign-in attempt.
     */
    signIn: undefined;
    /**
     * A function that sets the active session.
     */
    setActive: undefined;
} | {
    isLoaded: true;
    signIn: SignInResource;
    setActive: SetActive;
};
/**
 * @inline
 */
type UseSignUpReturn = {
    /**
     * A boolean that indicates whether Clerk has completed initialization. Initially `false`, becomes `true` once Clerk loads.
     */
    isLoaded: false;
    /**
     * An object that contains the current sign-up attempt status and methods to create a new sign-up attempt.
     */
    signUp: undefined;
    /**
     * A function that sets the active session.
     */
    setActive: undefined;
} | {
    isLoaded: true;
    signUp: SignUpResource;
    setActive: SetActive;
};
/**
 * @inline
 */
type UseSessionReturn = {
    /**
     * A boolean that indicates whether Clerk has completed initialization. Initially `false`, becomes `true` once Clerk loads.
     */
    isLoaded: false;
    /**
     * A boolean that indicates whether a user is currently signed in.
     */
    isSignedIn: undefined;
    /**
     * The current active session for the user.
     */
    session: undefined;
} | {
    isLoaded: true;
    isSignedIn: false;
    session: null;
} | {
    isLoaded: true;
    isSignedIn: true;
    session: SignedInSessionResource;
};
/**
 * @inline
 */
type UseSessionListReturn = {
    /**
     * A boolean that indicates whether Clerk has completed initialization. Initially `false`, becomes `true` once Clerk loads.
     */
    isLoaded: false;
    /**
     * A list of sessions that have been registered on the client device.
     */
    sessions: undefined;
    /**
     * A function that sets the active session and/or organization.
     */
    setActive: undefined;
} | {
    isLoaded: true;
    sessions: SessionResource[];
    setActive: SetActive;
};
/**
 * @inline
 */
type UseUserReturn = {
    /**
     * A boolean that indicates whether Clerk has completed initialization. Initially `false`, becomes `true` once Clerk loads.
     */
    isLoaded: false;
    /**
     * A boolean that returns `true` if the user is signed in.
     */
    isSignedIn: undefined;
    /**
     * The `User` object for the current user.
     */
    user: undefined;
} | {
    isLoaded: true;
    isSignedIn: false;
    user: null;
} | {
    isLoaded: true;
    isSignedIn: true;
    user: UserResource;
};

type PublishableKey = {
    frontendApi: string;
    instanceType: InstanceType;
};

/**
 * You can configure proxy and satellite domains in a few ways:
 *
 * 1) none of them are set
 * 2) only `proxyUrl` is set
 * 3) `isSatellite` and `proxyUrl` are set
 * 4) `isSatellite` and `domain` are set
 */
type MultiDomainAndOrProxy = {
    /**
     * A boolean that indicates whether the application is a satellite application.
     */
    isSatellite?: never;
    /**
     * **Required for applications that run behind a reverse proxy**. The URL that Clerk will proxy requests to. Can be either a relative path (`/__clerk`) or a full URL (`https://<your-domain>/__clerk`).
     */
    proxyUrl?: never | string | ((url: URL) => string);
    /**
     * **Required if your application is a satellite application**. Sets the domain of the satellite application.
     */
    domain?: never;
} | {
    isSatellite: Exclude<ClerkOptions['isSatellite'], undefined>;
    proxyUrl?: never;
    domain: string | ((url: URL) => string);
} | {
    isSatellite: Exclude<ClerkOptions['isSatellite'], undefined>;
    proxyUrl: string | ((url: URL) => string);
    domain?: never;
};
type MultiDomainAndOrProxyPrimitives = {
    /**
     * A boolean that indicates whether the application is a satellite application.
     */
    isSatellite?: never;
    /**
     * **Required for applications that run behind a reverse proxy**. The URL that Clerk will proxy requests to. Can be either a relative path (`/__clerk`) or a full URL (`https://<your-domain>/__clerk`).
     */
    proxyUrl?: never | string;
    /**
     * **Required if your application is a satellite application**. Sets the domain of the satellite application.
     */
    domain?: never;
} | {
    isSatellite: boolean;
    proxyUrl?: never;
    domain: string;
} | {
    isSatellite: boolean;
    proxyUrl: string;
    domain?: never;
};
type DomainOrProxyUrl = {
    /**
     * **Required for applications that run behind a reverse proxy**. The URL that Clerk will proxy requests to. Can be either a relative path (`/__clerk`) or a full URL (`https://<your-domain>/__clerk`).
     */
    proxyUrl?: never;
    /**
     * **Required if your application is a satellite application**. Sets the domain of the satellite application.
     */
    domain?: string | ((url: URL) => string);
} | {
    proxyUrl?: string | ((url: URL) => string);
    domain?: never;
};

type RoutingMode = 'path' | 'virtual';
/**
 * This type represents a generic router interface that Clerk relies on to interact with the host router.
 */
type ClerkHostRouter = {
    readonly mode: RoutingMode;
    readonly name: string;
    pathname: () => string;
    push: (path: string) => void;
    replace: (path: string) => void;
    searchParams: () => URLSearchParams;
    shallowPush: (path: string) => void;
    inferredBasePath?: () => string;
};

type ServerGetTokenOptions = {
    template?: string;
};
type ServerGetToken = (options?: ServerGetTokenOptions) => Promise<string | null>;
type InitialState = Serializable<{
    sessionClaims: JwtPayload;
    sessionId: string | undefined;
    sessionStatus: SessionStatusClaim;
    session: SessionResource | undefined;
    actor: ActClaim | undefined;
    userId: string | undefined;
    user: UserResource | undefined;
    orgId: string | undefined;
    orgRole: OrganizationCustomRoleKey | undefined;
    orgSlug: string | undefined;
    orgPermissions: OrganizationCustomPermissionKey[] | undefined;
    organization: OrganizationResource | undefined;
    factorVerificationAge: [number, number];
}>;

/**
 * @internal
 */
type SharedSignedInAuthObjectProperties = {
    sessionClaims: JwtPayload;
    sessionId: string;
    sessionStatus: SessionStatusClaim | null;
    actor: ActClaim | undefined;
    userId: string;
    orgId: string | undefined;
    orgRole: OrganizationCustomRoleKey | undefined;
    orgSlug: string | undefined;
    orgPermissions: OrganizationCustomPermissionKey[] | undefined;
    /**
     * Factor Verification Age
     * Each item represents the minutes that have passed since the last time a first or second factor were verified.
     * [fistFactorAge, secondFactorAge]
     */
    factorVerificationAge: [firstFactorAge: number, secondFactorAge: number] | null;
};

export { type ActClaim, type ActJWTClaim, type Actions, type ActiveSessionResource, type AddMemberParams, type AddPaymentSourceParams, type AfterMultiSessionSingleSignOutUrl, type AfterSignOutUrl, type AlertId, type AlphaColorScale, type Appearance, type AppleOauthProvider, type AtlassianOauthProvider, type AttemptAffiliationVerificationParams, type AttemptEmailAddressVerificationParams, type AttemptFirstFactorParams, type AttemptPhoneNumberVerificationParams, type AttemptSecondFactorParams, type AttemptVerificationParams, type AttemptWeb3WalletVerificationParams, type Attribute, type AttributeData, type AttributeDataJSON, type Attributes, type AttributesJSON, type AuthConfigJSON, type AuthConfigJSONSnapshot, type AuthConfigResource, type AuthenticateWithCoinbaseWalletParams, type AuthenticateWithGoogleOneTapParams, type AuthenticateWithMetamaskParams, type AuthenticateWithOKXWalletParams, type AuthenticateWithPasskeyParams, type AuthenticateWithPopupParams, type AuthenticateWithRedirectParams, type AuthenticateWithWeb3Params, type Autocomplete, type BackupCodeAttempt, type BackupCodeFactor, type BackupCodeJSON, type BackupCodeResource, type BackupCodeStrategy, type BaseTheme, type BaseThemeTaggedType, type BeforeEmitCallback, type BitbucketOauthProvider, type BoxOauthProvider, type BoxShadow, type BuiltInColors, type CamelToSnake, type CancelSubscriptionParams, type CaptchaAppearanceOptions, type CaptchaProvider, type CaptchaWidgetType, type CardActionId, type CheckAuthorization, type CheckAuthorizationFn, type CheckAuthorizationFromSessionClaims, type CheckAuthorizationParamsFromSessionClaims, type CheckAuthorizationParamsWithCustomPermissions, type CheckAuthorizationWithCustomPermissions, type CheckoutTheme, type Clerk, type ClerkAPIError, type ClerkAPIErrorJSON, type ClerkAuthenticateWithWeb3Params, type ClerkEventPayload, type ClerkHostRouter, type ClerkJWTClaims, type ClerkOptions, type ClerkPaginatedResponse, type ClerkPaginationParams, type ClerkPaginationRequest, type ClerkResource, type ClerkResourceJSON, type ClerkResourceReloadParams, type ClerkRuntimeError, type ClerkStatus, type ClerkThemeOptions, type ClientJSON, type ClientJSONSnapshot, type ClientResource, type CodeVerificationAttemptParam, type CoinbaseOauthProvider, type CoinbaseWalletWeb3Provider, type Color, type ColorScale, type ColorScaleWithRequiredBase, type ColorString, type CommerceBillingNamespace, type CommerceCheckoutJSON, type CommerceCheckoutResource, type CommerceCheckoutTotals, type CommerceCheckoutTotalsJSON, type CommerceFeatureJSON, type CommerceFeatureJSONSnapshot, type CommerceFeatureResource, type CommerceInitializedPaymentSourceJSON, type CommerceInitializedPaymentSourceResource, type CommerceMoney, type CommerceMoneyJSON, type CommercePayment, type CommercePaymentChargeType, type CommercePaymentJSON, type CommercePaymentSourceJSON, type CommercePaymentSourceMethods, type CommercePaymentSourceResource, type CommercePaymentSourceStatus, type CommercePaymentStatus, type CommercePlanJSON, type CommercePlanJSONSnapshot, type CommercePlanResource, type CommerceProductJSON, type CommerceProductResource, type CommerceSettingsJSON, type CommerceSettingsJSONSnapshot, type CommerceSettingsResource, type CommerceStatementGroup, type CommerceStatementGroupJSON, type CommerceStatementJSON, type CommerceStatementResource, type CommerceStatementStatus, type CommerceStatementTotals, type CommerceStatementTotalsJSON, type CommerceSubscriberType, type CommerceSubscriptionJSON, type CommerceSubscriptionPlanPeriod, type CommerceSubscriptionResource, type CommerceSubscriptionStatus, type ComplexityErrors, type ConfirmCheckoutParams, type CreateBulkOrganizationInvitationParams, type CreateCheckoutParams, type CreateEmailAddressParams, type CreateEmailLinkFlowReturn, type CreateEnterpriseSSOLinkFlowReturn, type CreateExternalAccountParams, type CreateOrganizationInvitationParams, type CreateOrganizationModalProps, type CreateOrganizationParams, type CreateOrganizationProps, type CreateOrganizationTheme, type CreatePhoneNumberParams, type CreateWeb3WalletParams, type CredentialReturn, type CssColorOrAlphaScale, type CssColorOrScale, type CustomMenuItem, type CustomNavigation, type CustomOAuthStrategy, type CustomOauthProvider, type CustomPage, type DeepCamelToSnake, type DeepPartial, type DeepRequired, type DeepSnakeToCamel, type DeletedObjectJSON, type DeletedObjectResource, type DiscordOauthProvider, type DisplayConfigJSON, type DisplayConfigJSONSnapshot, type DisplayConfigResource, type DisplayThemeJSON, type DomainOrProxyUrl, type DropboxOauthProvider, type ElementObjectKey, type ElementState, type Elements, type ElementsConfig, type EmUnit, type EmailAddressIdentifier, type EmailAddressJSON, type EmailAddressJSONSnapshot, type EmailAddressOrPhoneNumberIdentifier, type EmailAddressResource, type EmailCodeAttempt, type EmailCodeConfig, type EmailCodeFactor, type EmailCodeStrategy, type EmailLinkConfig, type EmailLinkFactor, type EmailLinkStrategy, type EnstallOauthProvider, type EnterpriseAccountConnectionJSON, type EnterpriseAccountConnectionJSONSnapshot, type EnterpriseAccountConnectionResource, type EnterpriseAccountJSON, type EnterpriseAccountJSONSnapshot, type EnterpriseAccountResource, type EnterpriseProtocol, type EnterpriseProvider, type EnterpriseSSOConfig, type EnterpriseSSOFactor, type EnterpriseSSOSettings, type EnterpriseSSOStrategy, type EnvironmentJSON, type EnvironmentJSONSnapshot, type EnvironmentResource, type ExternalAccountJSON, type ExternalAccountJSONSnapshot, type ExternalAccountResource, type FacebookOauthProvider, type FieldId, type FirstNameAttribute, type FontFamily, type FontWeight, type GenerateSignature, type GenerateSignatureParams, type GetDomainsParams, type GetInvitationsParams, type GetMembersParams, type GetMembershipRequestParams, type GetMemberships, type GetOrganizationMemberships, type GetPaymentSourcesParams, type GetPlansParams, type GetRolesParams, type GetStatementsParams, type GetSubscriptionsParams, type GetToken, type GetTokenOptions, type GetUserOrganizationInvitationsParams, type GetUserOrganizationMembershipParams, type GetUserOrganizationSuggestionsParams, type GithubOauthProvider, type GitlabOauthProvider, type GoogleOauthProvider, type GoogleOneTapProps, type GoogleOneTapStrategy, type HandleEmailLinkVerificationParams, type HandleOAuthCallbackParams, type HandleSamlCallbackParams, type HexColor, type HexColorString, type HslaColor, type HslaColorString, type HubspotOauthProvider, type HuggingfaceOAuthProvider, type IdSelectors, type IdentificationLinkJSON, type IdentificationLinkJSONSnapshot, type IdentificationLinkResource, type ImageJSON, type ImageResource, type InitialState, type InitializePaymentSourceParams, type InstagramOauthProvider, type InstanceType, type InviteMemberParams, type InviteMembersParams, type JWT, type JWTClaims, type JWTHeader, type JoinWaitlistParams, type Jwt, type JwtHeader, type JwtPayload, type LastNameAttribute, type Layout, type LegacyRedirectProps, type LegalAcceptedAttribute, type LineOauthProvider, type LinearOauthProvider, type LinkedinOIDCOauthProvider, type LinkedinOauthProvider, type ListenerCallback, type LoadedClerk, type LocalizationResource, type LocalizationValue, type MakeDefaultPaymentSourceParams, type MenuId, type MetamaskWeb3Provider, type MicrosoftOauthProvider, type MultiDomainAndOrProxy, type MultiDomainAndOrProxyPrimitives, type NavigateOptions, type NewSubscriptionRedirectUrl, type NextTaskParams, type NotionOauthProvider, type Nullable, OAUTH_PROVIDERS, type OAuthConfig, type OAuthProvider, type OAuthProviderData, type OAuthProviderSettings, type OAuthProviders, type OAuthScope, type OAuthStrategy, type OKXWalletWeb3Provider, type OauthFactor, type OrganizationCustomPermissionKey, type OrganizationCustomRoleKey, type OrganizationDomainJSON, type OrganizationDomainResource, type OrganizationDomainVerification, type OrganizationDomainVerificationJSON, type OrganizationDomainVerificationStatus, type OrganizationEnrollmentMode, type OrganizationInvitationJSON, type OrganizationInvitationResource, type OrganizationInvitationStatus, type OrganizationJSON, type OrganizationJSONSnapshot, type OrganizationListProps, type OrganizationListTheme, type OrganizationMembershipJSON, type OrganizationMembershipJSONSnapshot, type OrganizationMembershipRequestJSON, type OrganizationMembershipRequestResource, type OrganizationMembershipResource, type OrganizationPermissionKey, type OrganizationPreviewId, type OrganizationProfileModalProps, type OrganizationProfileProps, type OrganizationProfileTheme, type OrganizationResource, type OrganizationSettingsJSON, type OrganizationSettingsJSONSnapshot, type OrganizationSettingsResource, type OrganizationSuggestionJSON, type OrganizationSuggestionResource, type OrganizationSuggestionStatus, type OrganizationSwitcherProps, type OrganizationSwitcherTheme, type OrganizationSystemPermissionKey, type OrganizationSystemPermissionPrefix, type OrganizationsJWTClaim, type Override, type PartialWithClerkResource, type PassKeyConfig, type PasskeyAttempt, type PasskeyFactor, type PasskeyJSON, type PasskeyJSONSnapshot, type PasskeyResource, type PasskeySettingsData, type PasskeyStrategy, type PasskeyVerificationResource, type PasswordAttempt, type PasswordAttribute, type PasswordFactor, type PasswordSettingsData, type PasswordStrategy, type PasswordStrength, type PasswordValidation, type PathValue, type PaymentGateway, type PendingSessionOptions, type PendingSessionResource, type PermissionJSON, type PermissionResource, type PhoneCodeAttempt, type PhoneCodeConfig, type PhoneCodeFactor, type PhoneCodeSecondFactorConfig, type PhoneCodeStrategy, type PhoneNumberIdentifier, type PhoneNumberJSON, type PhoneNumberJSONSnapshot, type PhoneNumberResource, type PhoneNumberVerificationStrategy, type PlanDetailTheme, type PreferredSignInStrategy, type PrepareAffiliationVerificationParams, type PrepareEmailAddressVerificationParams, type PrepareFirstFactorParams, type PreparePhoneNumberVerificationParams, type PrepareSecondFactorParams, type PrepareVerificationParams, type PrepareWeb3WalletVerificationParams, type PricingTableProps, type PricingTableTheme, type ProfilePageId, type ProfileSectionId, type PublicKeyCredentialCreationOptionsJSON, type PublicKeyCredentialCreationOptionsWithoutExtensions, type PublicKeyCredentialRequestOptionsJSON, type PublicKeyCredentialRequestOptionsWithoutExtensions, type PublicKeyCredentialWithAuthenticatorAssertionResponse, type PublicKeyCredentialWithAuthenticatorAttestationResponse, type PublicOrganizationDataJSON, type PublicUserData, type PublicUserDataJSON, type PublicUserDataJSONSnapshot, type PublishableKey, type ReauthorizeExternalAccountParams, type RecordToPath, type RedirectOptions, type RedirectUrlProp, type RemovePaymentSourceParams, type RemoveUserPasswordParams, type ResetPasswordCodeFactor, type ResetPasswordEmailCodeAttempt, type ResetPasswordEmailCodeFactor, type ResetPasswordEmailCodeFactorConfig, type ResetPasswordEmailCodeStrategy, type ResetPasswordParams, type ResetPasswordPhoneCodeAttempt, type ResetPasswordPhoneCodeFactor, type ResetPasswordPhoneCodeFactorConfig, type ResetPasswordPhoneCodeStrategy, type Resources, type ReverificationConfig, type RgbaColor, type RgbaColorString, type RoleJSON, type RoleResource, type RoutingMode, type RoutingOptions, type RoutingStrategy, SAML_IDPS, type SDKMetadata, type SamlAccountConnectionJSON, type SamlAccountConnectionJSONSnapshot, type SamlAccountConnectionResource, type SamlAccountJSON, type SamlAccountJSONSnapshot, type SamlAccountResource, type SamlConfig, type SamlFactor, type SamlIdp, type SamlIdpMap, type SamlIdpSlug, type SamlSettings, type SamlStrategy, type SelectId, type Serializable, type ServerGetToken, type ServerGetTokenOptions, type SessionActivity, type SessionActivityJSON, type SessionJSON, type SessionJSONSnapshot, type SessionResource, type SessionStatus, type SessionStatusClaim, type SessionTask, type SessionVerificationAfterMinutes, type SessionVerificationFirstFactor, type SessionVerificationJSON, type SessionVerificationLevel, type SessionVerificationResource, type SessionVerificationSecondFactor, type SessionVerificationStatus, type SessionVerificationTypes, type SessionVerifyAttemptFirstFactorParams, type SessionVerifyAttemptSecondFactorParams, type SessionVerifyCreateParams, type SessionVerifyPrepareFirstFactorParams, type SessionVerifyPrepareSecondFactorParams, type SessionWithActivitiesJSON, type SessionWithActivitiesResource, type SetActive, type SetActiveParams, type SetOrganizationLogoParams, type SetProfileImageParams, type SetReservedForSecondFactorParams, type SharedSignedInAuthObjectProperties, type SignInButtonProps, type SignInCreateParams, type SignInData, type SignInFactor, type SignInFallbackRedirectUrl, type SignInFirstFactor, type SignInFirstFactorJSON, type SignInForceRedirectUrl, type SignInIdentifier, type SignInInitialValues, type SignInJSON, type SignInJSONSnapshot, type SignInModalProps, type SignInProps, type SignInRedirectOptions, type SignInResource, type SignInSecondFactor, type SignInSecondFactorJSON, type SignInStartEmailLinkFlowParams, type SignInStatus, type SignInStrategy, type SignInTheme, type SignOut, type SignOutCallback, type SignOutOptions, type SignUpAttributeField, type SignUpAuthenticateWithMetamaskParams, type SignUpAuthenticateWithWeb3Params, type SignUpButtonProps, type SignUpCreateParams, type SignUpData, type SignUpFallbackRedirectUrl, type SignUpField, type SignUpForceRedirectUrl, type SignUpIdentificationField, type SignUpInitialValues, type SignUpJSON, type SignUpJSONSnapshot, type SignUpModalProps, type SignUpModes, type SignUpProps, type SignUpRedirectOptions, type SignUpResource, type SignUpStatus, type SignUpTheme, type SignUpUpdateParams, type SignUpVerifiableField, type SignUpVerificationJSON, type SignUpVerificationJSONSnapshot, type SignUpVerificationResource, type SignUpVerificationsJSON, type SignUpVerificationsJSONSnapshot, type SignUpVerificationsResource, type SignatureVerificationAttemptParam, type SignedInSessionResource, type SlackOauthProvider, type SnakeToCamel, type SpotifyOauthProvider, type StartEmailLinkFlowParams, type StartEnterpriseSSOLinkFlowParams, type StateSelectors, type TOTPAttempt, type TOTPFactor, type TOTPJSON, type TOTPResource, type TOTPStrategy, type TelemetryCollector, type TelemetryEvent, type TelemetryEventRaw, type Theme, type TicketStrategy, type TiktokOauthProvider, type TokenJSON, type TokenJSONSnapshot, type TokenResource, type TransferableOption, type TransparentColor, type TwitchOauthProvider, type TwitterOauthProvider, type UnsubscribeCallback, type UpdateEnrollmentModeParams, type UpdateMembershipParams, type UpdateOrganizationMembershipParams, type UpdateOrganizationParams, type UpdatePasskeyParams, type UpdateUserParams, type UpdateUserPasswordParams, type UseAuthReturn, type UseSessionListReturn, type UseSessionReturn, type UseSignInReturn, type UseSignUpReturn, type UseUserReturn, type UserButtonProps, type UserButtonTheme, type UserData, type UserDataJSON, type UserDataJSONSnapshot, type UserJSON, type UserJSONSnapshot, type UserOrganizationInvitationJSON, type UserOrganizationInvitationResource, type UserPreviewId, type UserProfileModalProps, type UserProfileProps, type UserProfileTheme, type UserResource, type UserSettingsJSON, type UserSettingsJSONSnapshot, type UserSettingsResource, type UserVerificationTheme, type UsernameIdentifier, type UsernameSettingsData, type ValidatePasswordCallbacks, type Variables, type VerificationAttemptParams, type VerificationJSON, type VerificationJSONSnapshot, type VerificationResource, type VerificationStatus, type VerificationStrategy, type VerifyTOTPParams, type VersionedJwtPayload, WEB3_PROVIDERS, type WaitlistJSON, type WaitlistModalProps, type WaitlistProps, type WaitlistResource, type WaitlistTheme, type Web3Attempt, type Web3Provider, type Web3ProviderData, type Web3SignatureConfig, type Web3SignatureFactor, type Web3Strategy, type Web3WalletIdentifier, type Web3WalletJSON, type Web3WalletJSONSnapshot, type Web3WalletResource, type Without, type WithoutRouting, type XOauthProvider, type XeroOauthProvider, type ZxcvbnResult, type __internal_CheckoutProps, type __internal_ComponentNavigationContext, type __internal_PlanDetailsProps, type __internal_UserVerificationModalProps, type __internal_UserVerificationProps, getOAuthProviderData, getWeb3ProviderData, sortedOAuthProviders };
