---
name: I_PRODUCTPURCHASETAX
description: "Productpurchasetax"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTPURCHASETAX

**Productpurchasetax**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `cast( mlan.matnr as productnumber preserving type )` |  |  |
| `SourceLocationCountry` | ✓ | |  | `aland` |  |  |
| `TaxIndicator` |  | |  | `taxim` |  |  |
| `_Product` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_CountryText` | | ✓ | | | | |
| `_ProductDescription` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_Country` | `I_Country` | [1..1] |
| `_CountryText` | `I_CountryText` | [0..*] |
| `_ProductDescription` | `I_ProductDescription_2` | [0..*] |

## Source Code

```abap
// Product Purchase Tax Classification (active)
@AbapCatalog.sqlViewName: 'IPRDPURCHTAX'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Purchase Tax'
@ObjectModel.representativeKey: 'Product'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataCategory: #DIMENSION ,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@Metadata.allowExtensions:true
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE
]
@ObjectModel.sapObjectNodeType.name: 'ProductPlantPurchaseTax'
define view I_ProductPurchaseTax
  as select from mlan
  association [1..1] to I_Product     as _Product     on $projection.Product = _Product.Product
  association [1..1] to I_Country     as _Country     on $projection.SourceLocationCountry = _Country.Country
  association [0..*] to I_CountryText as _CountryText on $projection.SourceLocationCountry = _CountryText.Country
  association [0..*] to I_ProductDescription_2        as _ProductDescription            on  $projection.Product = _ProductDescription.Product
{
      @ObjectModel.foreignKey.association: '_Product'
  key cast( mlan.matnr  as productnumber preserving type ) as Product,
      @ObjectModel: {
            foreignKey.association: '_Country',
            text.association: '_CountryText'
          }
  key mlan.aland                                           as SourceLocationCountry,
      mlan.taxim                                           as TaxIndicator,
      _Product,
      _Country,
      _CountryText,
      _ProductDescription

}
// no sales tax relevant entries
//where // Commenting out due to not reading the record which doesn't have value in TAXIM.
//  taxim <> ''
```
