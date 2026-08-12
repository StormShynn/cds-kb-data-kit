---
name: I_SUPPLYPROTECTIONGROUP
description: "Supply Protection Group"
app_component: CA-ATP-SUP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLYPROTECTIONGROUP')/$value
semantic_en: "Supply Protection Group"
semantic_vi: "Supply Protection Group — CDS view cơ bản (master data) dựa trên sup_cvc."
keywords:
  - "supply"
  - "protection"
  - "group"
  - "prot"
  - "charc01"
  - "ctlg"
  - "path"
  - "value"
tags:
  - CA
  - CA-ATP
  - CA-ATP-SUP
  - CA-ATP-SUP-2CL
  - component:CA-ATP-SUP-2CL
  - interface-view
  - lob:cross_application components
---
# I_SUPPLYPROTECTIONGROUP

**Supply Protection Group**

| Property | Value |
|---|---|
| App Component | `CA-ATP-SUP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLYPROTECTIONGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplyProtectionGroupUUID` | ✓ | |  | `uuid` | `RAW(16)` | Characteristic Value Combination UUID |
| `SupplyProtectionUUID` |  | |  | `supobjectuuid` | `RAW(16)` | UUID |
| `SupProtCharc01CtlgPathUUID` |  | |  | `charc01catalogpathuuid` | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc01CtlgPathIntID` |  | |  | `charc01catalogpathid` | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc01ValueID` |  | |  | `characteristic01` | `SSTR(40)` | Characteristic Value |
| `SupProtCharc02CtlgPathUUID` |  | |  | `charc02catalogpathuuid` | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc02CtlgPathIntID` |  | |  | `charc02catalogpathid` | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc02ValueID` |  | |  | `characteristic02` | `SSTR(40)` | Characteristic Value |
| `SupProtCharc03CtlgPathUUID` |  | |  | `charc03catalogpathuuid` | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc03CtlgPathIntID` |  | |  | `charc03catalogpathid` | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc03ValueID` |  | |  | `characteristic03` | `SSTR(40)` | Characteristic Value |
| `SupProtCharc04CtlgPathUUID` |  | |  | `charc04catalogpathuuid` | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc04CtlgPathIntID` |  | |  | `charc04catalogpathid` | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc04ValueID` |  | |  | `characteristic04` | `SSTR(40)` | Characteristic Value |
| `SupProtCharc05CtlgPathUUID` |  | |  | `charc05catalogpathuuid` | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc05CtlgPathIntID` |  | |  | `charc05catalogpathid` | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc05ValueID` |  | |  | `characteristic05` | `SSTR(40)` | Characteristic Value |
| `SupProtCharc06CtlgPathUUID` |  | |  | `charc06catalogpathuuid` | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc06CtlgPathIntID` |  | |  | `charc06catalogpathid` | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc06ValueID` |  | |  | `characteristic06` | `SSTR(40)` | Characteristic Value |
| `SupProtCharc07CtlgPathUUID` |  | |  | `charc07catalogpathuuid` | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc07CtlgPathIntID` |  | |  | `charc07catalogpathid` | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc07ValueID` |  | |  | `characteristic07` | `SSTR(40)` | Characteristic Value |
| `SupProtCharc08CtlgPathUUID` |  | |  | `charc08catalogpathuuid` | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc08CtlgPathIntID` |  | |  | `charc08catalogpathid` | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc08ValueID` |  | |  | `characteristic08` | `SSTR(40)` | Characteristic Value |
| `SupProtCharc09CtlgPathUUID` |  | |  | `charc09catalogpathuuid` | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc09CtlgPathIntID` |  | |  | `charc09catalogpathid` | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc09ValueID` |  | |  | `characteristic09` | `SSTR(40)` | Characteristic Value |
| `SupProtCharc10CtlgPathUUID` |  | |  | `charc10catalogpathuuid` | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc10CtlgPathIntID` |  | |  | `charc10catalogpathid` | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc10ValueID` |  | |  | `characteristic10` | `SSTR(40)` | Characteristic Value |
| `SupProtGroupPriorityValue` |  | |  | `cvcpriority` | `INT4(10)` | Priority |
| `CreationDateTime` |  | |  | `creationdatetime` | `DEC(21)` | Created On / At |
| `CreatedByUser` |  | |  | `createdbyuser` | `CHAR(12)` | Created By User |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` | `DEC(21)` | Changed On / At |
| `LastChangedByUser` |  | |  | `lastchangedbyuser` | `CHAR(12)` | Last Changed By User |
| `CharcValAuthznGroup` |  | |  | `charcvalauthzngroup` | `CHAR(40)` | Supply Protection Characteristic Value Authorization Group |
| `SupplyProtectionGroupIsBlocked` |  | |  | `blocked` | `CHAR(1)` | Supply protection group is blocked |
| `UnitOfMeasure` |  | |  | `cast('' as abap.unit(3) )` | `UNIT(3)` |  |
| `SupProtProtectedQuantity` |  | |  | `cast(0 as abap.quan(15,3) )` | `QUAN(15)` |  |
| `SupProtConsumedQuantity` |  | |  | `cast(0 as abap.quan(15,3) )` | `QUAN(15)` |  |
| `SupProtRemainingProtectedQty` |  | |  | `cast(0 as abap.quan(15,3) )` | `QUAN(15)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLYPROTECTIONGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLYPROTECTIONGROUP')/$value)*

```abap
@VDM: { viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel:   { usageType: { serviceQuality: #B,
                               sizeCategory:   #XL,
                               dataClass:      #MASTER },
                supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Supply Protection Group'
define view entity I_SupplyProtectionGroup
  as select from sup_cvc
{
  key uuid                        as SupplyProtectionGroupUUID,
      supobjectuuid               as SupplyProtectionUUID,
      charc01catalogpathuuid      as SupProtCharc01CtlgPathUUID,
      charc01catalogpathid        as SupProtCharc01CtlgPathIntID,
      characteristic01            as SupProtCharc01ValueID,
      charc02catalogpathuuid      as SupProtCharc02CtlgPathUUID,
      charc02catalogpathid        as SupProtCharc02CtlgPathIntID,
      characteristic02            as SupProtCharc02ValueID,
      charc03catalogpathuuid      as SupProtCharc03CtlgPathUUID,
      charc03catalogpathid        as SupProtCharc03CtlgPathIntID,
      characteristic03            as SupProtCharc03ValueID,
      charc04catalogpathuuid      as SupProtCharc04CtlgPathUUID,
      charc04catalogpathid        as SupProtCharc04CtlgPathIntID,
      characteristic04            as SupProtCharc04ValueID,
      charc05catalogpathuuid      as SupProtCharc05CtlgPathUUID,
      charc05catalogpathid        as SupProtCharc05CtlgPathIntID,
      characteristic05            as SupProtCharc05ValueID,
      charc06catalogpathuuid      as SupProtCharc06CtlgPathUUID,
      charc06catalogpathid        as SupProtCharc06CtlgPathIntID,
      characteristic06            as SupProtCharc06ValueID,
      charc07catalogpathuuid      as SupProtCharc07CtlgPathUUID,
      charc07catalogpathid        as SupProtCharc07CtlgPathIntID,
      characteristic07            as SupProtCharc07ValueID,
      charc08catalogpathuuid      as SupProtCharc08CtlgPathUUID,
      charc08catalogpathid        as SupProtCharc08CtlgPathIntID,
      characteristic08            as SupProtCharc08ValueID,
      charc09catalogpathuuid      as SupProtCharc09CtlgPathUUID,
      charc09catalogpathid        as SupProtCharc09CtlgPathIntID,
      characteristic09            as SupProtCharc09ValueID,
      charc10catalogpathuuid      as SupProtCharc10CtlgPathUUID,
      charc10catalogpathid        as SupProtCharc10CtlgPathIntID,
      characteristic10            as SupProtCharc10ValueID,
      cvcpriority                 as SupProtGroupPriorityValue,
      creationdatetime            as CreationDateTime,
      createdbyuser               as CreatedByUser,
      lastchangedatetime          as LastChangeDateTime,
      lastchangedbyuser           as LastChangedByUser,
      charcvalauthzngroup         as CharcValAuthznGroup,
      blocked                     as SupplyProtectionGroupIsBlocked,

      cast('' as abap.unit(3) )   as UnitOfMeasure,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'

      cast(0 as abap.quan(15,3) ) as SupProtProtectedQuantity,

      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      cast(0 as abap.quan(15,3) ) as SupProtConsumedQuantity,

      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      cast(0 as abap.quan(15,3) ) as SupProtRemainingProtectedQty
}
```
