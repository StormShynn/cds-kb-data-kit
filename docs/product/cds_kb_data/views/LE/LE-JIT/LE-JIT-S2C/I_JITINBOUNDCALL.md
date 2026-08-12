---
name: I_JITINBOUNDCALL
description: "Jitinboundcall"
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-JIT
  - interface-view
  - component:LE-JIT-S2C
  - lob:Logistics Execution
---
# I_JITINBOUNDCALL

**Jitinboundcall**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITHeaderUUID` | ✓ | |  | `db_key` |  |  |
| `InternalJITCallNumber` |  | |  | `int_call_num` |  |  |
| `JITScenario` |  | |  | `njit_scenario` |  |  |
| `ExternalJITCallNumber` |  | |  | `ext_call_num` |  |  |
| `CustomerUUID` |  | |  | `customeruuid` |  |  |
| `ShipToParty` |  | |  | `kunnr` |  |  |
| `SoldToParty` |  | |  | `kunag` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `UnloadingPointName` |  | |  | `ablad` |  |  |
| `CustomerPartnerDescription` |  | |  | `knref` |  |  |
| `MatlUsageIndicator` |  | |  | `abrvw` |  |  |
| `ActiveSupplier` |  | |  | `cast( lifnr as abap.char( 10 ) )` |  |  |
| `JITCallType` |  | |  | `call_type` |  |  |
| `JITLifecycleStatus` |  | |  | `lifecycle_stat` |  |  |
| `VehicleModel` |  | |  | `vhcle_model` |  |  |
| `VehicleIdentificationNumber` |  | |  | `vhvin` |  |  |
| `JITExtSequenceNumber` |  | |  | `ext_sequence_num` |  |  |
| `JITIntSequenceNumber` |  | |  | `int_sequence_num` |  |  |
| `JITComponentIsReordered` |  | |  | `jitcomponentisreordered` |  |  |
| `CreationDateTime` |  | |  | `crea_date_time` |  |  |
| `CreatedByUser` |  | |  | `crea_uname` |  |  |
| `LastChangeDateTime` |  | |  | `lchg_date_time` |  |  |
| `LastChangedByUser` |  | |  | `lchg_uname` |  |  |
| `_CustomerToBusinessPartner` | | ✓ | | | | |
| `_JITLifecycleStatus` | | ✓ | | | | |
| `_JITCallType` | | ✓ | | | | |
| `_JITCustomer` | | ✓ | | | | |
| `_MatlUsageIndicator` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_LastChangedByUserDescription` | | ✓ | | | | |
| `_CreatedByUserDescription` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_JITComponentIsReordered` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_JITCallHdrRefTextEnhcd` | | ✓ | | | | |
| `_JITInbCallComponentGroup` | | ✓ | | | | |
| `_JITInbCallComponent` | | ✓ | | | | |
| `_JITInbCallReferenceText` | | ✓ | | | | |
| `_JITInbCallDocReference` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerToBusinessPartner` | `I_Customer_to_BusinessPartner` | [1..1] |
| `_JITLifecycleStatus` | `I_JITLifecycleStatus` | [0..1] |
| `_JITCallType` | `I_JITCallType` | [0..1] |
| `_JITCustomer` | `I_JITCustomer` | [1..1] |
| `_MatlUsageIndicator` | `I_MatlUsageIndicator` | [0..1] |
| `_CreatedByUser` | `I_UserContactCard` | [0..1] |
| `_LastChangedByUser` | `I_UserContactCard` | [0..1] |
| `_LastChangedByUserDescription` | `I_UserDescription` | [0..1] |
| `_CreatedByUserDescription` | `I_UserDescription` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_JITComponentIsReordered` | `I_JITComponentIsReordered` | [0..1] |
| `_SoldToParty` | `I_BusinessPartner` | [0..1] |
| `_JITCallHdrRefTextEnhcd` | `I_JITCallHdrRefTextEnhcd` | [0..1] |
| `_Extension` | `E_JITInboundCall` | [1] |

## Source Code

```abap
@AccessControl                        : { authorizationCheck      : #MANDATORY,
                                          personalData.blocking   : #REQUIRED,
                                          privilegedAssociations  : ['_CreatedByUser', '_LastChangedByUser', '_LastChangedByUserDescription', '_CreatedByUserDescription'] }
@Analytics                            : { dataCategory            : #DIMENSION,
                                          internalName            : #LOCAL }
@AbapCatalog.extensibility            : { allowNewDatasources     : false,
                                          dataSources             : ['_Extension'],
                                          extensible              : true,
                                          quota                   : { maximumFields : 500,
                                                                      maximumBytes  : 50000 }
                                        }
@Metadata.allowExtensions             : true
@Metadata.ignorePropagatedAnnotations : true
@EndUserText.label                    : 'JIT Inbound Call'
@ObjectModel                          : { modelingPattern         : #ANALYTICAL_DIMENSION,
                                          representativeKey       : 'JITHeaderUUID',
                                          sapObjectNodeType.name  : 'JustInTimeInboundCall',
                                          supportedCapabilities   : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                          usageType               : { dataClass       : #TRANSACTIONAL,
                                                                      serviceQuality  : #A,
                                                                      sizeCategory    : #XXL }
                                        }
@VDM.viewType                         : #BASIC

define root view entity I_JITInboundCall
  as select from njit_call_d_hdr
  composition [0..*] of I_JITInbCallComponentGroup    as _JITInbCallComponentGroup
  composition [0..*] of I_JITInbCallComponent         as _JITInbCallComponent
  composition [0..*] of I_JITInbCallReferenceText     as _JITInbCallReferenceText
  composition [0..*] of I_JITInbCallDocReference      as _JITInbCallDocReference

  association [1..1] to I_Customer_to_BusinessPartner as _CustomerToBusinessPartner    on  $projection.CustomerUUID = _CustomerToBusinessPartner.BusinessPartnerUUID
  association [0..1] to I_JITLifecycleStatus          as _JITLifecycleStatus           on  $projection.JITLifecycleStatus = _JITLifecycleStatus.JITLifecycleStatus
  association [0..1] to I_JITCallType                 as _JITCallType                  on  $projection.JITCallType = _JITCallType.JITCallType
  association [1..1] to I_JITCustomer                 as _JITCustomer                  on  $projection.CustomerUUID = _JITCustomer.CustomerUUID
  association [0..1] to I_MatlUsageIndicator          as _MatlUsageIndicator           on  $projection.MatlUsageIndicator = _MatlUsageIndicator.MatlUsageIndicator
  association [0..1] to I_UserContactCard             as _CreatedByUser                on  $projection.CreatedByUser = _CreatedByUser.ContactCardID
  association [0..1] to I_UserContactCard             as _LastChangedByUser            on  $projection.LastChangedByUser = _LastChangedByUser.ContactCardID
  association [0..1] to I_UserDescription             as _LastChangedByUserDescription on  $projection.LastChangedByUser = _LastChangedByUserDescription.UserID
  association [0..1] to I_UserDescription             as _CreatedByUserDescription     on  $projection.CreatedByUser = _CreatedByUserDescription.UserID
  association [0..1] to I_Customer                    as _Customer                     on  $projection.ShipToParty = _Customer.Customer
  association [0..1] to I_SalesOrganization           as _SalesOrganization            on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel         as _DistributionChannel          on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_Division                    as _Division                     on  $projection.Division = _Division.Division
  association [0..1] to I_JITComponentIsReordered     as _JITComponentIsReordered      on  $projection.JITComponentIsReordered = _JITComponentIsReordered.JITComponentIsReordered
  association [0..1] to I_BusinessPartner             as _SoldToParty                  on  $projection.SoldToParty = _SoldToParty.BusinessPartner
  association [0..1] to I_JITCallHdrRefTextEnhcd      as _JITCallHdrRefTextEnhcd       on  $projection.JITHeaderUUID = _JITCallHdrRefTextEnhcd.JITObjectUUID
  association [1]    to E_JITInboundCall              as _Extension                    on  $projection.JITHeaderUUID = _Extension.JITHeaderUUID
{
  key db_key                           as JITHeaderUUID,

      // Alternative Identifier 1
      int_call_num                     as InternalJITCallNumber,
      njit_scenario                    as JITScenario,

      // Alternative Identifier 2
      ext_call_num                     as ExternalJITCallNumber,
      @ObjectModel.foreignKey.association : '_JITCustomer'
      customeruuid                     as CustomerUUID,

      // Partner fields
      @ObjectModel.foreignKey.association : '_Customer'
      kunnr                            as ShipToParty,
      @ObjectModel.foreignKey.association : '_SoldToParty'
      kunag                            as SoldToParty,
      @ObjectModel.foreignKey.association : '_SalesOrganization'
      vkorg                            as SalesOrganization,
      @ObjectModel.foreignKey.association : '_DistributionChannel'
      vtweg                            as DistributionChannel,
      @ObjectModel.foreignKey.association : '_Division'
      spart                            as Division,
      ablad                            as UnloadingPointName,
      knref                            as CustomerPartnerDescription,
      @ObjectModel.foreignKey.association : '_MatlUsageIndicator'
      abrvw                            as MatlUsageIndicator,
      cast( lifnr as abap.char( 10 ) ) as ActiveSupplier,

      // JIT Call Type
      @ObjectModel.foreignKey.association : '_JITCallType'
      call_type                        as JITCallType,

      // Status fields
      @ObjectModel.foreignKey.association : '_JITLifecycleStatus'
      lifecycle_stat                   as JITLifecycleStatus,

      // Vehicle Identification
      vhcle_model                      as VehicleModel,
      vhvin                            as VehicleIdentificationNumber,

      // Sequence Numbers
      ext_sequence_num                 as JITExtSequenceNumber,
      int_sequence_num                 as JITIntSequenceNumber,


      // Re-order
      @ObjectModel.foreignKey.association : '_JITComponentIsReordered'
      @Semantics.booleanIndicator: true
      jitcomponentisreordered          as JITComponentIsReordered,

      // Administrative Data
      @Semantics.systemDateTime.createdAt: true
      crea_date_time                   as CreationDateTime,
      @Semantics.user.createdBy: true
      crea_uname                       as CreatedByUser,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      lchg_date_time                   as LastChangeDateTime,
      @Semantics.user.lastChangedBy:true
      lchg_uname                       as LastChangedByUser,

      // Associations
      _JITInbCallComponentGroup,
      _JITInbCallComponent,
      _CustomerToBusinessPartner,
      _JITLifecycleStatus,
      _JITCallType,
      _JITCustomer,
      _MatlUsageIndicator,
      _CreatedByUser,
      _LastChangedByUser,
      _Customer,
      _SalesOrganization,
      _Division,
      _DistributionChannel,
      _JITComponentIsReordered,
      _JITInbCallReferenceText,
      _SoldToParty,
      _JITCallHdrRefTextEnhcd,
      _LastChangedByUserDescription,
      _JITInbCallDocReference,
      _CreatedByUserDescription
}
where
  njit_scenario = '1'
```
