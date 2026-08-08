---
name: I_LGLTRANSSRCETXTAPI01
description: "Lgltranssrcetxtapi 01"
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - interface-view
  - component:CM-LT-2CL
  - lob:Other
---
# I_LGLTRANSSRCETXTAPI01

**Lgltranssrcetxtapi 01**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalTransactionSource` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LglCntntMLglTransSrceTxt` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILCMLTSRCETAPI01'
@EndUserText.label: 'Legal Transaction Source - Text'
@ObjectModel.representativeKey: 'LegalTransactionSource'
@ObjectModel.semanticKey: 'LegalTransactionSource'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@AbapCatalog.preserveKey:true
define view I_LglTransSrceTxtAPI01
  as select from I_LglCntntMLglTransSrceTxt
{
      //I_LglCntntMLglTransSrceTxt
  key LegalTransactionSource,
      @Semantics.language: true
  key Language,
      @Semantics.text: true
      LglCntntMLglTransSrceTxt
}
```
