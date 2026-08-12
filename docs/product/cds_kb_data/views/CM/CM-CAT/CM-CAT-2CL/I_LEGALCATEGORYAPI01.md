---
name: I_LEGALCATEGORYAPI01
description: "Legalcategoryapi 01"
app_component: CM-CAT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-CAT
  - interface-view
  - component:CM-CAT-2CL
  - lob:Other
---
# I_LEGALCATEGORYAPI01

**Legalcategoryapi 01**

| Property | Value |
|---|---|
| App Component | `CM-CAT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMCategory` | ✓ | |  |  |  |  |
| `LglCntntMCatLevel` |  | |  |  |  |  |
| `LglCntntMCatType` |  | |  |  |  |  |
| `LglCntntMCatIsSelect` |  | |  |  |  |  |
| `LglCntntMCatIsMultiSelection` |  | |  |  |  |  |
| `LglCntntMCatIsObsolete` |  | |  |  |  |  |
| `LglCntntMCatModel` |  | |  |  |  |  |
| `LglCntntMCategoryValue` |  | |  |  |  |  |
| `LglCntntMCatIsUpdateFromTable` |  | |  |  |  |  |
| `LglCntntMCreatedByUser` |  | |  |  |  |  |
| `LglCntntMCreatedUTCDateTime` |  | |  |  |  |  |
| `LglCntntMChangedByUser` |  | |  |  |  |  |
| `LglCntntMChangedUTCDateTime` |  | |  |  |  |  |
| `LglCntntMParentCategory` |  | |  |  |  |  |
| `LglCntntMRootCategory` |  | |  |  |  |  |
| `LglCntntMCatPurpose` |  | |  |  |  |  |
| `LglCntntMCatIsSystGenerated` |  | |  |  |  |  |
| `LglCntntMCatConstant` |  | |  |  |  |  |
| `LglCntntMCategoryName` |  | |  |  |  |  |
| `LglCntntMCategoryNameSyst` |  | |  |  |  |  |
| `LglCntntMCategoryNameInEnglish` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILCMCATAPI01'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#CHECK
@VDM.viewType : #BASIC

@ObjectModel: {
  semanticKey: 'LglCntntMCategory',
  representativeKey: 'LglCntntMCategory',
  usageType.serviceQuality: #B,
  usageType.sizeCategory: #L,
  usageType.dataClass: #TRANSACTIONAL
}

@AccessControl.personalData.blocking: #REQUIRED

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true 

@EndUserText.label: 'Legal Category'
define view I_LegalCategoryAPI01 
    as select from I_LglCntntMCategory {
    
    key LglCntntMCategory,

      LglCntntMCatLevel,

      LglCntntMCatType,

      LglCntntMCatIsSelect,

      LglCntntMCatIsMultiSelection,

      LglCntntMCatIsObsolete,

      LglCntntMCatModel,

      LglCntntMCategoryValue,

      LglCntntMCatIsUpdateFromTable,

      LglCntntMCreatedByUser,

      LglCntntMCreatedUTCDateTime,

      LglCntntMChangedByUser,

      LglCntntMChangedUTCDateTime,

      LglCntntMParentCategory,

      LglCntntMRootCategory,
      
      LglCntntMCatPurpose,
      
      LglCntntMCatIsSystGenerated,
      
      LglCntntMCatConstant,
      
      @Semantics.text: true
      LglCntntMCategoryName,
      @Semantics.text: true
      LglCntntMCategoryNameSyst,
      @Semantics.text: true
      LglCntntMCategoryNameInEnglish  
    
}
```
