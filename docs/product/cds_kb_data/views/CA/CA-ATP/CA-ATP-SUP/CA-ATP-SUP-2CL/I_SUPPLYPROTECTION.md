---
name: I_SUPPLYPROTECTION
description: "Supply Protection"
app_component: CA-ATP-SUP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLYPROTECTION')/$value
semantic_en: "Supply Protection"
semantic_vi: "Supply Protection — CDS view cơ bản (master data) dựa trên sup_object."
keywords:
  - "supply"
  - "protection"
  - "material"
  - "plant"
  - "name"
  - "prot"
  - "lifecycle"
  - "status"
tags:
  - CA
  - CA-ATP
  - CA-ATP-SUP
  - CA-ATP-SUP-2CL
  - component:CA-ATP-SUP-2CL
  - interface-view
  - lob:cross_application components
---
# I_SUPPLYPROTECTION

**Supply Protection**

| Property | Value |
|---|---|
| App Component | `CA-ATP-SUP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLYPROTECTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplyProtectionUUID` | ✓ | |  | `uuid` | `RAW(16)` | UUID |
| `Material` |  | |  | `material` | `CHAR(40)` | Material Number |
| `Plant` |  | |  | `plant` | `CHAR(4)` | Plant |
| `SupplyProtectionName` |  | |  | `name` | `CHAR(60)` | Name |
| `SupProtLifecycleStatus` |  | |  | `status` | `CHAR(2)` | Status |
| `SupProtPlanningPeriodType` |  | |  | `planningperiodtype` | `CHAR(1)` | Planning Period Type |
| `SupProtPlanningPeriodStartDate` |  | |  | `planningperiodstart` | `DATS(8)` | Planning Period Start Date |
| `SupProtPlanningPeriodEndDate` |  | |  | `planningperiodend` | `DATS(8)` | Planning Period End Date |
| `SupProtCoreCharc01CtlgPathUUID` |  | |  | `corecharc01catalogpathuuid` | `RAW(16)` | Characteristic Catalog Path UUID |
| `CoreCharc01CtlgPathIntID` |  | |  | `corecharc01catalogpathid` | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCoreCharc01ValueID` |  | |  | `corecharc01value` | `SSTR(40)` | Characteristic Value |
| `SupProtCoreCharc02CtlgPathUUID` |  | |  | `corecharc02catalogpathuuid` | `RAW(16)` | Characteristic Catalog Path UUID |
| `CoreCharc02CtlgPathIntID` |  | |  | `corecharc02catalogpathid` | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCoreCharc02ValueID` |  | |  | `corecharc02value` | `SSTR(40)` | Characteristic Value |
| `SupProtIsPlanningContextSlsOrd` |  | |  | `planningcontextso` | `CHAR(1)` | Planning Context: Sales Document |
| `SupProtIsPlanningContextSTO` |  | |  | `planningcontextsto` | `CHAR(1)` | Planning Context: Stock Transport Order |
| `SupProtCharcCatalogType` |  | |  | `catalogtype` | `CHAR(2)` | Characteristic Catalog Type |
| `CreationDateTime` |  | |  | `creationdatetime` | `DEC(21)` | Created On / At |
| `CreatedByUser` |  | |  | `createdbyuser` | `CHAR(12)` | Created By User |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` | `DEC(21)` | Changed On / At |
| `LastChangedByUser` |  | |  | `lastchangedbyuser` | `CHAR(12)` | Last Changed By User |
| `CharcValAuthznGroup` |  | |  | `charcvalauthzngroup` | `CHAR(40)` | Supply Protection Characteristic Value Authorization Group |
| `DraftLastChangedDateTime` |  | |  | `last_changed_at` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `SupplyProtectionIsBlocked` |  | |  | `blocked` | `CHAR(1)` | Supply protection object is blocked |
| `SupProtAutomActivationIsActive` |  | |  | `autoactivation` | `CHAR(1)` | Automatic Activation of Supply Protection Object |
| `SupProtAutomActivationDate` |  | |  | `autoactivationdate` | `DATS(8)` | Date of Automatic Activation |
| `SupProtActivationDate` |  | |  | `activationdate` | `DATS(8)` | Activation Date |
| `SupProtCnsmpnDateTimeType` |  | |  | `case consumptiondatetype when '' then '01' else consumptiondatetype end` | `CHAR(2)` | Reference Date Type for Consumption |
| `SupProtSelfRestrictionType` |  | |  | `case selfrestriction when '' then '01' else selfrestriction end` | `CHAR(2)` | Restriction by Own Protection |
| `UnitOfMeasure` |  | |  | `cast('' as abap.unit(3) )` | `UNIT(3)` |  |
| `SupProtProtectedQuantity` |  | |  | `cast(0 as abap.quan(15,3) )` | `QUAN(15)` |  |
| `SupProtConsumedQuantity` |  | |  | `cast(0 as abap.quan(15,3) )` | `QUAN(15)` |  |
| `SupProtRemainingProtectedQty` |  | |  | `cast(0 as abap.quan(15,3) )` | `QUAN(15)` |  |
| `StorageLocation` |  | |  | `storagelocation` | `CHAR(4)` | Storage Location |
| `SupProtPlanningLevel` |  | |  | `case planninglevel when '' then '01' else planninglevel end` | `CHAR(2)` | Planning Level for Supply Protection Objects |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLYPROTECTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLYPROTECTION')/$value)*

```abap
@VDM: { viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel: { usageType: { serviceQuality: #B,
                             sizeCategory:   #L,
                             dataClass:      #MASTER },
                compositionRoot: true,
                supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Supply Protection'
define root view entity I_SupplyProtection
  as select from sup_object
{
  key uuid                        as SupplyProtectionUUID,
      material                    as Material,
      plant                       as Plant,
      name                        as SupplyProtectionName,
      status                      as SupProtLifecycleStatus,
      planningperiodtype          as SupProtPlanningPeriodType,
      planningperiodstart         as SupProtPlanningPeriodStartDate,
      planningperiodend           as SupProtPlanningPeriodEndDate,
      corecharc01catalogpathuuid  as SupProtCoreCharc01CtlgPathUUID,
      corecharc01catalogpathid    as CoreCharc01CtlgPathIntID,
      corecharc01value            as SupProtCoreCharc01ValueID,
      corecharc02catalogpathuuid  as SupProtCoreCharc02CtlgPathUUID,
      corecharc02catalogpathid    as CoreCharc02CtlgPathIntID,
      corecharc02value            as SupProtCoreCharc02ValueID,
      planningcontextso           as SupProtIsPlanningContextSlsOrd,
      planningcontextsto          as SupProtIsPlanningContextSTO,
      catalogtype                 as SupProtCharcCatalogType,
      creationdatetime            as CreationDateTime,
      createdbyuser               as CreatedByUser,
      lastchangedatetime          as LastChangeDateTime,
      lastchangedbyuser           as LastChangedByUser,
      charcvalauthzngroup         as CharcValAuthznGroup,
      last_changed_at             as DraftLastChangedDateTime,
      blocked                     as SupplyProtectionIsBlocked,
      autoactivation              as SupProtAutomActivationIsActive,
      autoactivationdate          as SupProtAutomActivationDate,
      activationdate              as SupProtActivationDate,
      case consumptiondatetype
        when '' then '01'
        else consumptiondatetype
      end                         as SupProtCnsmpnDateTimeType,
      case selfrestriction
        when '' then '01'
        else selfrestriction
      end                         as SupProtSelfRestrictionType,

      cast('' as abap.unit(3) )   as UnitOfMeasure,

      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      cast(0 as abap.quan(15,3) ) as SupProtProtectedQuantity,

      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      cast(0 as abap.quan(15,3) ) as SupProtConsumedQuantity,

      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      cast(0 as abap.quan(15,3) ) as SupProtRemainingProtectedQty,

      storagelocation             as StorageLocation,
      case planninglevel
        when '' then '01'
        else planninglevel
      end                         as SupProtPlanningLevel

}
```
