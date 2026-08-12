---
name: I_CH_ELECTRONICDOCTYPETEXT
description: "CH Electronicdoctypetext"
app_component: CA-GTF-CSC-EDO-CH
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
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - text-view
  - text
  - component:CA-GTF-CSC-EDO-CH
  - lob:Cross-Application Components
---
# I_CH_ELECTRONICDOCTYPETEXT

**CH Electronicdoctypetext**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-CH` |
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
| `CH_ElectronicDocAcctgDocType` | ✓ | |  | `blart` |  |  |
| `CH_ElectronicDocTypeText` |  | |  | `ltext` |  |  |
| `_DocumentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocumentType` | `I_CH_ElectronicDocType` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Switzerland Documment Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #ORGANIZATIONAL}
  
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET] 

@ObjectModel.dataCategory: #TEXT                                      
                                     
@ObjectModel.modelingPattern:  #VALUE_HELP_PROVIDER  
                                     
@VDM.viewType: #BASIC
  

define view entity I_CH_ElectronicDocTypeText as select from t003t

association [1..1] to I_CH_ElectronicDocType as _DocumentType on $projection.CH_ElectronicDocAcctgDocType = _DocumentType.CH_ElectronicDocAcctgDocType 
{
  @Semantics.language:true 
  key spras as Language,
  @ObjectModel.text.element: ['CH_ElectronicDocTypeText']
  key blart as CH_ElectronicDocAcctgDocType,
  @Semantics.text: true
  ltext     as CH_ElectronicDocTypeText,
  
   _DocumentType
}
```
