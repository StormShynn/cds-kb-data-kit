---
name: I_SUPLREVALDOCCATCONFIGN
description: "Suplrevaldoccatconfign"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLREVALDOCCATCONFIGN

**Suplrevaldoccatconfign**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalRelevantDocCategory` | ✓ | |  | `cast( cast ( substring( dd07l.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as mmpur_ana_de_se_doc_config )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPEVLDOCCFT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'SuplrEvalRelevantDocCategory'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Supplier Eval Doc Catergory Config Value'
@ObjectModel.sapObjectNodeType.name: 'SupplierEvaluationScore'
define root view I_SuplrEvalDocCatConfign
  as select from dd07l 
  composition [0..*] of I_SuplrEvalDocCatConfignT as _Text
{
      @ObjectModel.text.association: '_Text'
  //key cast( dd07l.domvalue_l as mmpur_ana_de_se_doc_config ) as SuplrEvalRelevantDocCategory,
  key cast( cast ( substring( dd07l.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as mmpur_ana_de_se_doc_config ) as SuplrEvalRelevantDocCategory,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      _Text
}
where dd07l.domname  = 'MMPUR_ANA_SE_DOC_CONFIG'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
