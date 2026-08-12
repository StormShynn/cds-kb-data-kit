---
name: I_LGLTRANSMANDFLAGTXTAPI01
description: "Lgltransmandflagtxtapi 01"
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_LGLTRANSMANDFLAGTXTAPI01

**Lgltransmandflagtxtapi 01**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalTransactionMandatoryFlag` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LglCntntMLglTransMandFlagText` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILTRMANDFLAGTAPI'
@EndUserText.label: 'Mandatory Flag - Text'
@ObjectModel.representativeKey: 'LegalTransactionMandatoryFlag'
@ObjectModel.semanticKey: 'LegalTransactionMandatoryFlag'
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
define view I_LglTransMandFlagTxtAPI01
  as select from I_LglCntntMLglTransMandFlagTxt
{
      //I_LglCntntMLglTransMandFlagTxt
  key LegalTransactionMandatoryFlag,
      @Semantics.language: true
  key Language,
      @Semantics.text: true
      LglCntntMLglTransMandFlagText

}
```
