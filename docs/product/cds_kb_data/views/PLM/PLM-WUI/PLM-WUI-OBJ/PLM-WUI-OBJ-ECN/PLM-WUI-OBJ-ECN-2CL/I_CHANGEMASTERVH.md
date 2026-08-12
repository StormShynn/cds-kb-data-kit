---
name: I_CHANGEMASTERVH
description: "This view provides value help for change number. This view shall be used for value help purpose only. If you intend to select the entire business data, use the view Change Number instead."
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERVH')/$value
semantic_en: "This view provides value help for change number. This view shall be used for value help purpose only. If you intend to select the entire business data, use the view Change Number instead."
semantic_vi: "Change Number — CDS view giao diện dựa trên I_ChangeMaster."
keywords:
  - "change"
  - "number"
  - "description"
  - "authorization"
  - "group"
  - "status"
  - "function"
tags:
  - PLM
  - bo:purchaseorder
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHANGEMASTERVH

**This view provides value help for change number. This view shall be used for value help purpose only. If you intend to select the entire business data, use the view Change Number instead.**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumber` | ✓ | |  |  | `CHAR(12)` | Change Number |
| `ChangeNumberDescription` |  | |  |  | `CHAR(40)` | Change number description |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization group for change master record |
| `ChangeNumberStatus` |  | |  |  | `NUMC(2)` | Status of Change Number |
| `ChangeNumberFunction` |  | |  |  | `CHAR(1)` | Change number function |
| `ReasonForChangeText` |  | |  |  | `CHAR(40)` | Reason for change |
| `IsTechnicallyReleased` |  | |  |  | `CHAR(1)` | Indicator: Technical release occurs |
| `ChangeNumberReleaseKey` |  | |  |  | `NUMC(2)` | Release Key for Change Master Record |
| `ChangeNumberValidFromDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ChangeNumberCreationDate` |  | |  |  | `DATS(8)` | Date on Which Record Was Created |
| `ChangeNumberCreatedByUser` |  | |  |  | `CHAR(12)` | User Who Created Record |
| `ChangeNumberLastChangedDate` |  | |  |  | `DATS(8)` | Changed On |
| `ChangeNumberLastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `IsUsedForDataDefinition` |  | |  |  | `CHAR(1)` | Change Number Is Currently Being Used in Objects |
| `ChangeNumberIsMrkdForDeletion` |  | |  |  | `CHAR(1)` | Deletion Flag for Change Number (Reorganization) |
| `ChangeNumberLastChgdDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `_LogAccMObjectTypeActive` | | ✓ | | | | |
| `_LogAccMObjectUserAuthzn` | | ✓ | | | | |
| `_LogAccMObjSecureIDAssgmt` | | ✓ | | | | |
| `_ChangeMasterLogAccMActive` | | ✓ | | | | |
| `_ChgMstrLogAccMSecureIDAssgmt` | | ✓ | | | | |
| `_ChangeMstrLogAccMUserAuthzn` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERVH')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: [
  '_LogAccMObjectTypeActive'  ,
  '_LogAccMObjectUserAuthzn'  ,
  '_LogAccMObjSecureIDAssgmt'  ]

@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'ICHANGEMASTR_VH'
@ObjectModel.representativeKey: 'ChangeNumber'

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@Search.searchable: true

@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number'
define view entity I_ChangeMasterVH
  as select from I_ChangeMaster
{
      @ObjectModel.text.element: ['ChangeNumberDescription']

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
  key ChangeNumber,

      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 0.8
      ChangeNumberDescription,

      AuthorizationGroup,
      ChangeNumberStatus,
      ChangeNumberFunction,
      ReasonForChangeText,
      IsTechnicallyReleased,
      ChangeNumberReleaseKey,
      ChangeNumberValidFromDate,
      ChangeNumberCreationDate,
      ChangeNumberCreatedByUser,
      ChangeNumberLastChangedDate,
      ChangeNumberLastChangedByUser,
      IsUsedForDataDefinition,
      ChangeNumberIsMrkdForDeletion,

      @Consumption.hidden: true
      ChangeNumberLastChgdDateTime,

      // Access Control Management not C1 released, not used in DCL anymore
      @Consumption.hidden:true
      _LogAccMObjectTypeActive,
      @Consumption.hidden:true
      _LogAccMObjectUserAuthzn,
      @Consumption.hidden:true
      _LogAccMObjSecureIDAssgmt,

      // Access Control Management C1 released, used in DCL
      @Consumption.hidden:true
      _ChangeMasterLogAccMActive,
      @Consumption.hidden:true
      _ChgMstrLogAccMSecureIDAssgmt,
      @Consumption.hidden:true
      _ChangeMstrLogAccMUserAuthzn
}
```
