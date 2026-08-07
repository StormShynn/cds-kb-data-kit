---
name: I_PRODUCTSALESTAX
description: Productsalestax
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
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
# I_PRODUCTSALESTAX

**Productsalestax**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Product` | ✓ | |  | `cast (tax.matnr as productnumber preserving type )` |
| `Country` | ✓ | |  | `aland` |
| `TaxCategory` | ✓ | |  | `tatyp` |
| `TaxClassification` | ✓ | |  | `case taxType.lfdnr when '1' then tax.taxm1 when '2' then tax.taxm2 when '3' then tax.taxm3 when '4' then tax.taxm4 when '5' then tax.taxm5 when '6' then tax.taxm6 when '7' then tax.taxm7 when '8' then tax.taxm8 when '9' then tax.taxm9 else '' end` |
| `_Product` | | ✓ | | |
| `_Country` | | ✓ | | |
| `_CountryName` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_Country` | `I_Country` | [1..1] |
| `_CountryName` | `I_CountryText` | [0..*] |

## Source Code

```abap
// Product Sales Tax Classification
@AbapCatalog.sqlViewName: 'IPRDSALESTAX'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Sales Tax'

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MIXED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET
]

define view I_ProductSalesTax
  as select from mlan as tax
    inner join   tstl as taxType on tax.aland = taxType.talnd

  association [1..1] to I_Product     as _Product     on $projection.Product = _Product.Product
  association [1..1] to I_Country     as _Country     on $projection.Country = _Country.Country
  association [0..*] to I_CountryText as _CountryName on $projection.Country = _CountryName.Country

{
      @ObjectModel: {
        foreignKey.association: '_Product'
      }
  key cast (tax.matnr       as productnumber preserving type ) as Product,

      @ObjectModel: {
        foreignKey.association: '_Country',
        text.association: '_CountryName'
      }
  key tax.aland                                                as Country,
  key taxType.tatyp                                            as TaxCategory,


  key case taxType.lfdnr
          when '1' then
              tax.taxm1
          when '2' then
              tax.taxm2
          when '3' then
              tax.taxm3
          when '4' then
              tax.taxm4
          when '5' then
              tax.taxm5
          when '6' then
              tax.taxm6
          when '7' then
              tax.taxm7
          when '8' then
              tax.taxm8
          when '9' then
              tax.taxm9
          else ''
      end                                                      as TaxClassification,

      _Product,
      _Country,
      _CountryName

      //      tax.taxim                               as TaxIndicator
}
// no purchase tax relevant entries
//where
//  taxim = ''
```
