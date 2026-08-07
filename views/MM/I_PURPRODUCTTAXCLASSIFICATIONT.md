---
name: I_PURPRODUCTTAXCLASSIFICATIONT
description: "Purproducttaxclassificationt"
app_component: MM
software_component: SAPSCORE
release_state: released
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
