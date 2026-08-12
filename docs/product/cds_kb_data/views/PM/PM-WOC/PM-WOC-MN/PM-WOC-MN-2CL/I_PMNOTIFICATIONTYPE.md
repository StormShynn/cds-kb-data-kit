---
name: I_PMNOTIFICATIONTYPE
description: "Pmnotificationtype"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_PMNOTIFICATIONTYPE

**Pmnotificationtype**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NotificationType` | ✓ | |  | `qmart` |  |  |
| `NumberRange` |  | |  | `qmnuk` |  |  |
| `NotificationOrigin` |  | |  | `herkz` |  |  |
| `IsExternalNumberRange` |  | | `_NumberRangeIntervals` | `externind` |  |  |
| `MaintPriorityType` |  | |  | `artpr` |  |  |
| `NotificationCategory` |  | |  | `qmtyp` |  |  |
| `LongTextIsNotChangeable` |  | |  | `qmltxt02` |  |  |
| `UserCanBeNotified` |  | |  | `case when _PartnerRoles.parvw is not null then 'X' else '' end` |  |  |
| `UserMustBeNotified` |  | |  | `case when _PartnerRoles.papfl = 'X' then 'X' else '' end` |  |  |
| `NotifiedUserCanBeDeleted` |  | |  | `case when _PartnerRoles.aendb = 'X' then '' else 'X' end` |  |  |
| `IsNotificationCreationType` |  | |  | `reqmaintapp_use` |  |  |
| `CatalogProfile` |  | |  | `rbnr` |  |  |
| `MaintNotifObjPrtCodeCatalog` |  | |  | `otkat` |  |  |
| `MaintNotifDamageCodeCatalog` |  | |  | `fekat` |  |  |
| `MaintNotifCauseCodeCatalog` |  | |  | `urkat` |  |  |
| `MaintNotifTaskCodeCatalog` |  | |  | `makat` |  |  |
| `MaintNotifActivityCodeCatalog` |  | |  | `mfkat` |  |  |
| `MaintNotifRespPartnerFunction` |  | |  | `parvw_vera` |  |  |
| `MaintenanceOrderType` |  | |  | `auart` |  |  |
| `MaintNotifCodgCatalogTypeCode` |  | |  | `sakat` |  |  |
| `MaintNotifTypeHasActvPhseModel` |  | |  | `maintnotiftypehasactvphsemodel` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PMNotificationTypeText` | [0..*] |
| `_PartnerRoles` | `tpaer` | [0..1] |
| `_NumberRangeIntervals` | `nriv` | [0..1] |

## Source Code

```abap
@AbapCatalog: { compiler.compareFilter: true, sqlViewName: 'IPMNOTIFTYPE', preserveKey }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Maintenance Notification Types'
@Analytics: { dataExtraction : { enabled: true , delta.changeDataCapture.automatic: true } }

@VDM.viewType: #BASIC

@ObjectModel: {
  representativeKey: 'NotificationType',
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S },
    supportedCapabilities: [#EXTRACTION_DATA_SOURCE,#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET] }

@Metadata: { allowExtensions, ignorePropagatedAnnotations }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.sapObjectNodeType.name:'MaintenanceNotificationType'
define view I_PMNotificationType
  as select from tq80
  association [0..*] to I_PMNotificationTypeText as _Text                 on  _Text.NotificationType = $projection.NotificationType
  association [0..1] to tpaer                    as _PartnerRoles         on  _PartnerRoles.pargr = tq80.pargr
                                                                          and _PartnerRoles.parvw = 'IT'
  association [0..1] to nriv                     as _NumberRangeIntervals on  _NumberRangeIntervals.nrrangenr = $projection.NumberRange
                                                                          and _NumberRangeIntervals.object    = 'QMEL_NR'
                                                                          and _NumberRangeIntervals.subobject = ''
                                                                          and _NumberRangeIntervals.toyear    = '0000'
{

      @ObjectModel.text.association: '_Text'
  key qmart                               as NotificationType,

      // @ObjectModel.foreignKey.association: '_NumberRangeIntervals'
      tq80.qmnuk                          as NumberRange,

      herkz                               as NotificationOrigin,

      _NumberRangeIntervals.externind     as IsExternalNumberRange,

      artpr                               as MaintPriorityType,

      qmtyp                               as NotificationCategory,

      qmltxt02                            as LongTextIsNotChangeable,

      case when _PartnerRoles.parvw is not null then 'X'
      else '' end                         as UserCanBeNotified,


      case when  _PartnerRoles.papfl = 'X' then 'X'
      else '' end                         as UserMustBeNotified,

      case when  _PartnerRoles.aendb = 'X' then ''
      else 'X' end                        as NotifiedUserCanBeDeleted,

      tq80.reqmaintapp_use                as IsNotificationCreationType,

      tq80.rbnr                           as CatalogProfile,

      // Default catalogs for respective Notification Type
      tq80.otkat                          as MaintNotifObjPrtCodeCatalog,
      tq80.fekat                          as MaintNotifDamageCodeCatalog,
      tq80.urkat                          as MaintNotifCauseCodeCatalog,
      tq80.makat                          as MaintNotifTaskCodeCatalog,
      tq80.mfkat                          as MaintNotifActivityCodeCatalog,

      tq80.parvw_vera                     as MaintNotifRespPartnerFunction,

      tq80.auart                          as MaintenanceOrderType,
      tq80.sakat                          as MaintNotifCodgCatalogTypeCode,
      tq80.maintnotiftypehasactvphsemodel as MaintNotifTypeHasActvPhseModel,
      // Propagate association
      _Text
}
```
