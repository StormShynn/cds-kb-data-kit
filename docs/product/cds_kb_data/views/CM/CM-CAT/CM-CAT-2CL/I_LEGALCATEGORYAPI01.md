---
name: I_LEGALCATEGORYAPI01
description: "Legalcategoryapi 01"
app_component: CM-CAT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
