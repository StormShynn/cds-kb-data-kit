---
name: I_LGLCNTNTMGOVLAWTEXTAPI01
description: "Lglcntntmgovlawtextapi 01"
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-GF
  - interface-view
  - text
  - component:CM-GF-2CL
  - lob:Other
---
# I_LGLCNTNTMGOVLAWTEXTAPI01

**Lglcntntmgovlawtextapi 01**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMGovLaw` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LglCntntMGovLawText` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILCMGOVLAWTAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: [ 'LglCntntMGovLaw' ]

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@EndUserText.label: 'Governing Law - Text'
define view I_LglCntntMGovLawTextAPI01
  as select from I_LglCntntMGovLawText
{

  key LglCntntMGovLaw,

      @Semantics.language: true
  key Language,

      @Semantics.text: true -- identifies the text field
      LglCntntMGovLawText

}
```
