---
name: I_CUSTCNDNGROUPVALUEHELPTEXT
description: "Custcndngroupvaluehelptext"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - value-help
  - text-view
  - text
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_CUSTCNDNGROUPVALUEHELPTEXT

**Custcndngroupvaluehelptext**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `CustomerConditionGroup` | ✓ | |  | `kdkgr` |  |  |
| `CustomerConditionGroupText` |  | |  | `vtext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNGROUPTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@EndUserText.label: 'Customer Condition Group - Text'
@ObjectModel.representativeKey: 'CustomerConditionGroup'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@Analytics:{
    internalName:#LOCAL,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
   automatic : true
         }
      }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE ]

define view I_CustCndnGroupValueHelpText
 as select from tvkggt as CustCndnGroupValueHelpTex
 association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language  
{
     @Semantics.language: true
     @ObjectModel.foreignKey.association: '_Language'
     key spras as Language, 
     
     key kdkgr as CustomerConditionGroup,
      @Consumption.filter.hidden: true
      @Semantics.text: true
      vtext as CustomerConditionGroupText,
     
      _Language
}
```
