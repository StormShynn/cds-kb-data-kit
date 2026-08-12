---
name: I_RETURNSDOCUMENTTYPE
description: "Returnsdocumenttype"
app_component: LO-ARM-2CL
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
  - LO-ARM
  - interface-view
  - document
  - component:LO-ARM-2CL
  - lob:Logistics General
---
# I_RETURNSDOCUMENTTYPE

**Returnsdocumenttype**

| Property | Value |
|---|---|
| App Component | `LO-ARM-2CL` |
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
| `ReturnsDocumentType` | ✓ | |  | `cast( substring(dd07l.domvalue_l, 1, 2) as msr_doc_type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ReturnsDocumentTypeText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'ReturnsDocumentType'
@ObjectModel.usageType.dataClass:  #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@Metadata.ignorePropagatedAnnotations : true
@EndUserText.label: 'Returns Document Type'
@ObjectModel.modelingPattern          : #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities    : [
  #ANALYTICAL_DIMENSION,
  #SQL_DATA_SOURCE,
  #CDS_MODELING_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET,
  #ANALYTICAL_DIMENSION,
  #VALUE_HELP_PROVIDER,
  #EXTRACTION_DATA_SOURCE
]
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IRMRETDOCTYPE'
@Metadata.allowExtensions: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.sapObjectNodeType.name: 'ReturnsDocumentType'
@Search.searchable: true
@Consumption.ranked: true
define view I_ReturnsDocumentType
as select from
dd07l
association [0..*] to I_ReturnsDocumentTypeText as _Text on $projection.ReturnsDocumentType = _Text.ReturnsDocumentType
{
    //key
    @ObjectModel.text.association: '_Text'
    key cast( substring(dd07l.domvalue_l, 1, 2) as msr_doc_type)  as ReturnsDocumentType,
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,
    _Text

}
where (dd07l.domname = 'MSR_DOC_TYPE') and (dd07l.as4local = 'A');
```
