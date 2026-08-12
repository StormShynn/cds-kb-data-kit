---
name: I_CUSTCNDNGROUPVALUEHELPTEXT
description: "Custcndngroupvaluehelptext"
app_component: LO-MD-BP-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
