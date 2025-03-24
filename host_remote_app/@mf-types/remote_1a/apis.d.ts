
    export type RemoteKeys = 'remote_1a/Form_1a';
    type PackageType<T> = T extends 'remote_1a/Form_1a' ? typeof import('remote_1a/Form_1a') :any;