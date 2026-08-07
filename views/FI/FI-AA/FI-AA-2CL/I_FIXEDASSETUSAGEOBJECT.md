---
name: I_FIXEDASSETUSAGEOBJECT
description: "Fixed AssetUSAGEOBJECT"
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
# I_FIXEDASSETUSAGEOBJECT

**Fixed AssetUSAGEOBJECT**

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
| `FixedAssetUsageObjectDesc` |  | |  | `description` |  |  |
| `BaseUnit` |  | |  | `base_uom` |  |  |
| `FixedAssetUsageObjLfcycSts` |  | |  | `lifecycle_status` |  |  |
| `CreationDateTime` |  | |  | `creation_datetime` |  |  |
| `CreatedByUser` |  | |  | `creation_user` |  |  |
| `LastChangeDateTime` |  | |  | `lastchange_datetime` |  |  |
| `LastChangedByUser` |  | |  | `lastchange_user` |  |  |
| `DraftLastChangedDateTime` |  | |  | `draft_lastchange_datetime` |  |  |
| `_UsageObjectPeriod` | | ✓ | | | | |
| `_UsageObjectTotal` | | ✓ | | | | |
| `_UsageObjectWhereUsd` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_UsageObjectLifecycleStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UsageObjectPeriod` | `I_FixedAssetUsageObjectPeriod` | [0..*] |
| `_UsageObjectTotal` | `I_FixedAssetUsageObjectTotal` | [0..*] |
| `_UsageObjectWhereUsd` | `I_FixedAssetUsageObjWhereUsd` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_UsageObjectLifecycleStatus` | `I_FxdAstUsageObjectLfcycSts` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIXASSETUO'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.dataMaintenance: #RESTRICTED
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Fixed Asset Usage Object'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'FixedAssetUsageObject'
@ObjectModel.compositionRoot: true
@ObjectModel.usageType: {
        serviceQuality: #A,
        sizeCategory: #XL,
        dataClass: #MASTER
}

@ObjectModel:{
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE ]
}

@Metadata.ignorePropagatedAnnotations: true

@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

define view I_FixedAssetUsageObject
  as select from faat_uo as UsageObject

  association [0..*] to I_FixedAssetUsageObjectPeriod as _UsageObjectPeriod          on  $projection.CompanyCode           = _UsageObjectPeriod.CompanyCode
                                                                                     and $projection.FixedAssetUsageObject = _UsageObjectPeriod.FixedAssetUsageObject

  association [0..*] to I_FixedAssetUsageObjectTotal  as _UsageObjectTotal           on  $projection.CompanyCode           = _UsageObjectTotal.CompanyCode

                                                                                     and $projection.FixedAssetUsageObject = _UsageObjectTotal.FixedAssetUsageObject

  association [0..*] to I_FixedAssetUsageObjWhereUsd  as _UsageObjectWhereUsd        on  $projection.CompanyCode           = _UsageObjectWhereUsd.CompanyCode

                                                                                     and $projection.FixedAssetUsageObject = _UsageObjectWhereUsd.FixedAssetUsageObject

  association [0..1] to I_CompanyCode                 as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_UnitOfMeasure               as _UnitOfMeasure              on  $projection.BaseUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_FxdAstUsageObjectLfcycSts   as _UsageObjectLifecycleStatus on  $projection.FixedAssetUsageObjLfcycSts = _UsageObjectLifecycleStatus.FixedAssetUsageObjLfcycSts


{
         @ObjectModel.foreignKey.association: '_CompanyCode'
  key    comp_code                 as CompanyCode,

         @ObjectModel.text.element: ['FixedAssetUsageObjectDesc']
  key    usage_object              as FixedAssetUsageObject,

         @Semantics.text: true
         description               as FixedAssetUsageObjectDesc,

         @Semantics.unitOfMeasure:true
         @ObjectModel: { foreignKey.association: '_UnitOfMeasure' }
         base_uom                  as BaseUnit,

         @ObjectModel.foreignKey.association:'_UsageObjectLifecycleStatus'
         lifecycle_status          as FixedAssetUsageObjLfcycSts,

         @EndUserText.label:'Created At'
         @EndUserText.quickInfo:'Created At'
         creation_datetime         as CreationDateTime,

         creation_user             as CreatedByUser,

         @EndUserText.label:'Changed At'
         @EndUserText.quickInfo: 'Changed At'
         lastchange_datetime       as LastChangeDateTime,

         lastchange_user           as LastChangedByUser,

         draft_lastchange_datetime as DraftLastChangedDateTime,

         _CompanyCode,

         _UnitOfMeasure,

         _UsageObjectLifecycleStatus,

         @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
         _UsageObjectPeriod,
         @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
         _UsageObjectTotal,
         @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
         _UsageObjectWhereUsd
}
```
