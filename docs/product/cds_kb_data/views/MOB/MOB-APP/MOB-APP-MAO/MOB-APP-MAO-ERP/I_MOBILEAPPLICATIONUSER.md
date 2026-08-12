---
name: I_MOBILEAPPLICATIONUSER
description: "This CDS view provides the data to answer the following business questions: How many mobile users exist? Which mobile users are locked? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOBILEAPPLICATIONUSER')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: How many mobile users exist? Which mobile users are locked? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Mobile Application User — CDS view giao diện dựa trên Mobile Application User."
keywords:
  - "mobile"
  - "application"
  - "user"
  - "internal"
  - "device"
  - "server"
tags:
  - MOB
  - bo:companycode
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
---
# I_MOBILEAPPLICATIONUSER

**This CDS view provides the data to answer the following business questions: How many mobile users exist? Which mobile users are locked? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOBILEAPPLICATIONUSER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserInternal` | ✓ | |  | `user_guid` | `CHAR(32)` | User GUID |
| `MobileUserDeviceInternal` |  | |  | `device_id` | `CHAR(50)` | Syclo Device Id |
| `MobileUserDeviceUser` |  | |  | `device_user_id` | `CHAR(20)` | Syclo Middleware Device User Id |
| `MobileUserServerInternal` |  | |  | `server_id` | `CHAR(50)` | Syclo Middleware Server Serial No. |
| `MobileUserApplication` |  | |  | `mobile_app` | `CHAR(30)` | Mobile Application Name |
| `MobileUserGroupInternal` |  | |  | `group_id` | `CHAR(30)` | Syclo Middleware User Group Id |
| `MobileUser` |  | |  | `sap_userid` | `CHAR(12)` | User Name |
| `MaintMobileApplicationUserName` |  | | `_User` | `UserDescription` | `CHAR(80)` | User Description |
| `MobileUserLastSessionInternal` |  | |  | `last_sess_guid` | `CHAR(32)` | Session GUID |
| `MobileUserIsLocked` |  | |  | `lock_flag` | `CHAR(1)` | Lock flag |
| `MobileUserProductRoleIsValid` |  | |  | `no_valid_role` | `CHAR(1)` | Flag - No Valid Product Role |
| `MobileUserLogicalSystem` |  | |  | `source_system` | `CHAR(10)` | Logical System |
| `MobileUserEmailAddress` |  | |  | `cast( smtp_addr as so_name )` | `CHAR(241)` | Recipient address |
| `MobileUserWebAddress` |  | |  | `cast( http_addr as so_name )` | `CHAR(241)` | Recipient address |
| `MobileUserDefaultAddressType` |  | |  | `default_addr` | `CHAR(10)` | Notification address type |
| `MntMblAppUsrDfltAddrTypeName` |  | |  | `_DefaultAddressTypeText[Language = $session.system_language].MntMblAppUsrDfltAddrTypeName` | `CHAR(60)` | Short Text for Fixed Values |
| `MobileUserCreatedBy` |  | |  | `created_by` | `CHAR(12)` | Created by |
| `MobileUserCreationDateTime` |  | |  | `created_ts` | `DEC(15)` | Creation timestamp |
| `MobileUserChangedBy` |  | |  | `changed_by` | `CHAR(12)` | Last Changed By |
| `MobileUserChangeDateTime` |  | |  | `changed_ts` | `DEC(15)` | Changed time stamp |
| `CreationDate` |  | |  | `tstmp_to_dats( created_ts, abap_system_timezone( $session.client, 'NULL' ), $session.client, 'NULL' )` | `DATS(8)` |  |
| `_DefaultAddressTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_User` | `I_User` | [1..1] |
| `_DefaultAddressTypeText` | `I_MntMblAppUsrDfltAddrTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOBILEAPPLICATIONUSER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOBILEAPPLICATIONUSER')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL
}

@EndUserText.label: 'Mobile Application User'

@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}

@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'MobileUserInternal',
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ],
  usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  }
}

@VDM.viewType: #BASIC

define view entity I_MobileApplicationUser
  as select from /syclo/mdw00

  association [1..1] to I_User                         as _User                   on _User.UserID = $projection.MobileUser
  association [0..*] to I_MntMblAppUsrDfltAddrTypeText as _DefaultAddressTypeText on _DefaultAddressTypeText.MobileUserDefaultAddressType = $projection.MobileUserDefaultAddressType
{
      @ObjectModel.text.element: [ 'MaintMobileApplicationUserName' ]
  key user_guid                                                                                 as MobileUserInternal,
      device_id                                                                                 as MobileUserDeviceInternal,
      device_user_id                                                                            as MobileUserDeviceUser,
      server_id                                                                                 as MobileUserServerInternal,
      mobile_app                                                                                as MobileUserApplication,
      group_id                                                                                  as MobileUserGroupInternal,
      @ObjectModel.text.element: [ 'MaintMobileApplicationUserName' ]
      sap_userid                                                                                as MobileUser,
      @Semantics.text: true
      _User.UserDescription                                                                     as MaintMobileApplicationUserName,
      last_sess_guid                                                                            as MobileUserLastSessionInternal,
      lock_flag                                                                                 as MobileUserIsLocked,
      no_valid_role                                                                             as MobileUserProductRoleIsValid,
      source_system                                                                             as MobileUserLogicalSystem,
      @Semantics.eMail.address: true
      cast( smtp_addr as so_name )                                                              as MobileUserEmailAddress,
      cast( http_addr as so_name )                                                              as MobileUserWebAddress,
      @ObjectModel.text.association: '_DefaultAddressTypeText'
      @ObjectModel.text.element: [ 'MntMblAppUsrDfltAddrTypeName' ]
      default_addr                                                                              as MobileUserDefaultAddressType,
      _DefaultAddressTypeText[Language = $session.system_language].MntMblAppUsrDfltAddrTypeName as MntMblAppUsrDfltAddrTypeName,
      created_by                                                                                as MobileUserCreatedBy,
      created_ts                                                                                as MobileUserCreationDateTime,
      changed_by                                                                                as MobileUserChangedBy,
      changed_ts                                                                                as MobileUserChangeDateTime,
      //    pernr          as PersonalNumber,  //this field will not be exposed

      @EndUserText.label: 'Created On'
      tstmp_to_dats(
        created_ts,
        abap_system_timezone( $session.client, 'NULL' ),
        $session.client,
        'NULL' )                                                                                as CreationDate,

      _DefaultAddressTypeText
}
```
