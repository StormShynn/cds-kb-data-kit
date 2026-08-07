---
name: I_PURPRODUCTTAXCLASSIFICATION
description: "Purproducttaxclassification"
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
# I_PURPRODUCTTAXCLASSIFICATION

**Purproducttaxclassification**

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
| `_Country` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Text` | `I_PurProductTaxClassificationT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPRDPURTAXCLS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@Analytics.dataExtraction.enabled: true 
@Analytics.internalName: #LOCAL         
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Purchasing Product Tax Classification'
@Metadata.ignorePropagatedAnnotations: true  
@Analytics.dataCategory: #DIMENSION
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION   
@ObjectModel.representativeKey: 'ProdPurchaseTaxClassification' 
@ObjectModel.sapObjectNodeType.name: 'PurProductTaxClassification'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,  
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
//                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]  
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API  
@VDM.viewType: #BASIC
define view I_PurProductTaxClassification

  as select from tmkm1
  association [0..1] to I_Country                      as _Country on  $projection.DestinationCountry = _Country.Country
  association [0..*] to I_PurProductTaxClassificationT as _Text    on  $projection.DestinationCountry = _Text.DestinationCountry
                                                                   and $projection.ProdPurchaseTaxClassification = _Text.ProdPurchaseTaxClassification
{

      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
  key taxim as ProdPurchaseTaxClassification,
      @ObjectModel.foreignKey.association: '_Country'
  key land1 as DestinationCountry,
      _Text,
      _Country

}
```
