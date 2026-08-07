---
name: I_FIXEDASSETUSAGEOBJECTPERIOD
description: Fixed AssetUSAGEOBJECTPERIOD
app_component: FI-AA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AA
  - interface-view
  - fixed-asset
  - component:FI-AA-2CL
  - lob:Finance
  - bo:Asset
---
# I_FIXEDASSETUSAGEOBJECTPERIOD

**Fixed AssetUSAGEOBJECTPERIOD**

| Property | Value |
|---|---|
| App Component | `FI-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `comp_code` |  |  |
| `FixedAssetUsageObject` | ✓ | |  | `usage_object` |  |  |
| `ValidityEndDate` | ✓ | |  | `valid_to_date` |  |  |
| `ValidityStartDate` |  | |  | `valid_from_date` |  |  |
| `PeriodPlannedQtyInProdnUnit` |  | |  | `period_units` |  |  |
| `BaseUnit` |  | | `_UsageObject` | `BaseUnit` |  |  |
| `_UsageObject` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UsageObject` | `I_FixedAssetUsageObject` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIXASSETUOPERD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@EndUserText.label: 'Period Units of Fixed Asset Usage Object'
@ObjectModel.usageType: {
        serviceQuality: #A,
        sizeCategory: #M,
        dataClass: #MASTER
}

@ObjectModel:{
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET ]
}

@Metadata.ignorePropagatedAnnotations: true

@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

define view I_FixedAssetUsageObjectPeriod
  as select from faat_uo_period as _UsageObjectPeriod

  association [1..1] to I_FixedAssetUsageObject as _UsageObject on  $projection.CompanyCode           = _UsageObject.CompanyCode
                                                                and $projection.FixedAssetUsageObject = _UsageObject.FixedAssetUsageObject

  association [0..1] to I_CompanyCode           as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode


{
          @ObjectModel.foreignKey.association: '_CompanyCode'
  key     comp_code       as CompanyCode,
          @ObjectModel.foreignKey.association: '_UsageObject'
  key     usage_object    as FixedAssetUsageObject,

          @Semantics.businessDate.to: true
  key     valid_to_date   as ValidityEndDate,

          @Semantics.businessDate.from: true
          valid_from_date as ValidityStartDate,

          @Semantics.quantity.unitOfMeasure: 'BaseUnit'
          @EndUserText.label: 'Planned Number of Units for the Period'
          period_units    as PeriodPlannedQtyInProdnUnit,

          @Semantics.unitOfMeasure: true
          _UsageObject.BaseUnit,

          _CompanyCode,
          _UsageObject._UnitOfMeasure,

          @ObjectModel.association.type: [ #TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT ]
          _UsageObject

}
```
