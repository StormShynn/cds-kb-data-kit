---
name: I_PURPRODUCTTAXCLASSIFICATIONT
description: "Purproducttaxclassificationt"
app_component: MM
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
  - MM
  - interface-view
  - product
  - tax
  - classification
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURPRODUCTTAXCLASSIFICATIONT

**Purproducttaxclassificationt**

| Property | Value |
|---|---|
| App Component | `MM` |
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
| `ProdPurchaseTaxClassification` | ✓ | |  | `taxim` |  |  |
| `DestinationCountry` | ✓ | |  | `land1` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ProdPurTaxClassificationName` |  | |  | `taxib` |  |  |
| `_Country` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPRDPURTAXCLST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@Analytics.dataExtraction.enabled: true 
@ClientHandling.algorithm: #SESSION_VARIABLE  
@EndUserText.label: 'Product Tax Classification - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT  
@ObjectModel.representativeKey: 'ProdPurchaseTaxClassification'
@ObjectModel.sapObjectNodeType.name: 'PurProductTaxClassification'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
//                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE] 
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API 
@VDM.viewType: #BASIC

define view I_PurProductTaxClassificationT  

 as select from tmkm1t
  association [0..1] to I_Country  as _Country  on $projection.DestinationCountry = _Country.Country
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key    taxim as ProdPurchaseTaxClassification,
         @ObjectModel.foreignKey.association: '_Country'
  key    land1 as DestinationCountry,
         @ObjectModel.foreignKey.association: '_Language'
         @Semantics.language:true
  key    spras as Language,
         @Semantics.text: true
         @Search.defaultSearchElement: true
         @Search.ranking: #LOW
         taxib as ProdPurTaxClassificationName,
         _Language,
         _Country

}
```
