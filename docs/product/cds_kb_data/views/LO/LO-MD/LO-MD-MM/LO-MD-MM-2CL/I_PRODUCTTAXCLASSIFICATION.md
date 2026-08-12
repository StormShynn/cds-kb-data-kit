---
name: I_PRODUCTTAXCLASSIFICATION
description: "Producttaxclassification"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - product
  - tax
  - classification
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTTAXCLASSIFICATION

**Producttaxclassification**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `cast (tax.matnr as productnumber preserving type )` |  |  |
| `Country` | ✓ | |  | `aland` |  |  |
| `TaxClassification1` |  | |  | `taxm1` |  |  |
| `TaxClassification2` |  | |  | `taxm2` |  |  |
| `TaxClassification3` |  | |  | `taxm3` |  |  |
| `TaxClassification4` |  | |  | `taxm4` |  |  |
| `TaxClassification5` |  | |  | `taxm5` |  |  |
| `TaxClassification6` |  | |  | `taxm6` |  |  |
| `TaxClassification7` |  | |  | `taxm7` |  |  |
| `TaxClassification8` |  | |  | `taxm8` |  |  |
| `TaxClassification9` |  | |  | `taxm9` |  |  |
| `_Product` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_CountryName` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_Country` | `I_Country` | [1..1] |
| `_CountryName` | `I_CountryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDTAXCLASSFCTN'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Tax Classification for Product'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'Product'
@Metadata.allowExtensions:true
@Analytics.internalName:#LOCAL
@Analytics : {
  dataCategory: #DIMENSION,
  dataExtraction: {
      enabled: true,
      delta.changeDataCapture.automatic: true
    }
  }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE
]
@ObjectModel.sapObjectNodeType.name:'ProductTaxClassification'

define view I_ProductTaxClassification
  as select from mlan as tax

  association [1..1] to I_Product     as _Product     on $projection.Product = _Product.Product
  association [1..1] to I_Country     as _Country     on $projection.Country = _Country.Country
  association [0..*] to I_CountryText as _CountryName on $projection.Country = _CountryName.Country
{
      //@ObjectModel: {
        //   foreignKey.association: '_Product'
         //}
  key cast (tax.matnr       as productnumber preserving type ) as Product,

      @ObjectModel: {
        foreignKey.association: '_Country',
        text.association: '_CountryName'
      }
  key tax.aland                                                as Country,
      tax.taxm1                                                as TaxClassification1,
      tax.taxm2                                                as TaxClassification2,
      tax.taxm3                                                as TaxClassification3,
      tax.taxm4                                                as TaxClassification4,
      tax.taxm5                                                as TaxClassification5,
      tax.taxm6                                                as TaxClassification6,
      tax.taxm7                                                as TaxClassification7,
      tax.taxm8                                                as TaxClassification8,
      tax.taxm9                                                as TaxClassification9,

      _Product,
      _Country,
      _CountryName

}
```
