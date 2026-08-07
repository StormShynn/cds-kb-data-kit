---
name: I_ORGANIZATIONALCHANGE
description: "Organizationalchange"
app_component: FI-GL-OC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-OC
  - interface-view
  - component:FI-GL-OC-2CL
  - lob:Finance
---
# I_ORGANIZATIONALCHANGE

**Organizationalchange**

| Property | Value |
|---|---|
| App Component | `FI-GL-OC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrganizationalChange` | ✓ | |  | `orgl_change` |  |  |
| `OrganizationalChangeActivity` |  | |  | `last_activity` |  |  |
| `OrglChangeEffectiveDate` |  | |  | `effective_date` |  |  |
| `OrglChangeCreationDateTime` |  | |  | `creation_timestamp` |  |  |
| `OrglChangeCreatedByUser` |  | |  | `created_by_user` |  |  |
| `OrglChangeLastChangeDateTime` |  | |  | `last_change_timestamp` |  |  |
| `OrglChangeLastChangedByUser` |  | |  | `last_changed_by_user` |  |  |
| `OrglChangeProcessingStatus` |  | |  | `processing_status` |  |  |
| `OrglChangeApplicationVersion` |  | |  | `appl_version` |  |  |
| `OrganizationalChangeJobType` |  | | `_LastActivity` | `OrganizationalChangeJobType` |  |  |
| `ApplicationLog` |  | | `_LastActivity` | `ApplicationLog` |  |  |
| `StatusCode` |  | | `_LastActivity` | `JobStatusValue` |  |  |
| `NumberOfUniqueWarnings` |  | | `_LastActivity` | `NumberOfUniqueWarnings` |  |  |
| `NumberOfUniqueErrors` |  | | `_LastActivity` | `NumberOfUniqueErrors` |  |  |
| `ApplicationJob` |  | | `_LastActivity` | `ApplicationJob` |  |  |
| `ApplicationJobName` |  | | `_LastActivity` | `ApplicationJobName` |  |  |
| `_LastActivity` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_ProjectBasicData` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_CoCodeSelection` | | ✓ | | | | |
| `_PrftCtrSelection` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LastActivity` | `I_OrganizationalChangeActivity` | [0..1] |
| `_Text` | `I_OrganizationalChangeText` | [0..*] |
| `_WBSElement` | `I_OrglChangeWBSElement` | [0..*] |
| `_ProjectBasicData` | `I_OrganizationalChangeProject` | [0..*] |
| `_Product` | `I_OrganizationalChangeProduct` | [0..*] |
| `_MasterFixedAsset` | `I_OrglChangeFixedAsset` | [0..*] |
| `_Order` | `I_OrganizationalChangeOrder` | [0..*] |
| `_Extension` | `E_OrganizationalChange` | [1..1] |
| `_CoCodeSelection` | `I_OrglChangeCoCodeSelection` | [0..*] |
| `_PrftCtrSelection` | `I_OrglChangePrftCtrSelection` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFINOCORGLCHG'
@EndUserText.label: 'Organizational Change'
@Analytics: {
  dataCategory: #DIMENSION
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'OrganizationalChange'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.usageType: {
  dataClass: #TRANSACTIONAL,
  serviceQuality: #D,
  sizeCategory: #S
}
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Analytics.internalName:#LOCAL
@ObjectModel.supportedCapabilities:  [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SEARCHABLE_ENTITY,
    #ANALYTICAL_DIMENSION
]
define view I_OrganizationalChange
  as select from finoc_orglchg
  association [0..1] to I_OrganizationalChangeActivity as _LastActivity     on  $projection.OrganizationalChange         = _LastActivity.OrganizationalChange
                                                                            and $projection.OrganizationalChangeActivity = _LastActivity.OrganizationalChangeActivity
  association [0..*] to I_OrganizationalChangeText     as _Text             on  $projection.OrganizationalChange = _Text.OrganizationalChange
  association [0..*] to I_OrglChangeWBSElement         as _WBSElement       on  $projection.OrganizationalChange = _WBSElement.OrganizationalChange
  association [0..*] to I_OrganizationalChangeProject  as _ProjectBasicData on  $projection.OrganizationalChange = _ProjectBasicData.OrganizationalChange
  association [0..*] to I_OrganizationalChangeProduct  as _Product          on  $projection.OrganizationalChange = _Product.OrganizationalChange
  association [0..*] to I_OrglChangeFixedAsset         as _MasterFixedAsset on  $projection.OrganizationalChange = _MasterFixedAsset.OrganizationalChange
  association [0..*] to I_OrganizationalChangeOrder    as _Order            on  $projection.OrganizationalChange = _Order.OrganizationalChange
  association [1..1] to E_OrganizationalChange         as _Extension        on  $projection.OrganizationalChange = _Extension.OrganizationalChange
  association [0..*] to I_OrglChangeCoCodeSelection    as _CoCodeSelection  on  $projection.OrganizationalChange = _CoCodeSelection.OrganizationalChange
  association [0..*] to I_OrglChangePrftCtrSelection   as _PrftCtrSelection on  $projection.OrganizationalChange = _PrftCtrSelection.OrganizationalChange


{
      @ObjectModel.text.association: '_Text'
  key orgl_change                               as OrganizationalChange,
      last_activity                             as OrganizationalChangeActivity,
      effective_date                            as OrglChangeEffectiveDate,
      creation_timestamp                        as OrglChangeCreationDateTime,
      created_by_user                           as OrglChangeCreatedByUser,
      last_change_timestamp                     as OrglChangeLastChangeDateTime,
      last_changed_by_user                      as OrglChangeLastChangedByUser,
      processing_status                         as OrglChangeProcessingStatus,
      appl_version                              as OrglChangeApplicationVersion,


// not used, but please don't remove, this View is released API
      _LastActivity.OrganizationalChangeJobType as OrganizationalChangeJobType,
      _LastActivity.ApplicationLog              as ApplicationLog,
      _LastActivity.JobStatusValue              as StatusCode,
      _LastActivity.NumberOfUniqueWarnings      as NumberOfUniqueWarnings,
      _LastActivity.NumberOfUniqueErrors        as NumberOfUniqueErrors,
      _LastActivity.ApplicationJob              as ApplicationJob,
      _LastActivity.ApplicationJobName          as ApplicationJobName,


      _LastActivity,
      _Text,
      _WBSElement,
      _ProjectBasicData,
      _Product,
      _MasterFixedAsset,
      _Order,
      _CoCodeSelection,
      _PrftCtrSelection

}
where
  xarch is initial
```
