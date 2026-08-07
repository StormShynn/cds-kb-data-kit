---
name: I_PRODUCTUNITOFMEASUREEAN
description: PRODUCTUnit of MeasureEAN
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
  - unit-of-measure
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTUNITOFMEASUREEAN

**PRODUCTUnit of MeasureEAN**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` |
| `AlternativeUnit` | ✓ | |  | `meinh` |
| `ConsecutiveNumber` | ✓ | |  | `lfnum` |
| `ProductStandardID` |  | |  | `ean11` |
| `InternationalArticleNumberCat` |  | |  | `cast(mean.eantp as internationalarticlenumbercat preserving type )` |
| `IsMainGlobalTradeItemNumber` |  | |  | `hpean` |
| `_Product` | | ✓ | | |
| `_InternationalArticleNumber` | | ✓ | | |
| `_IntlArticleNumberCatText` | | ✓ | | |
| `_AlternativeUnit` | | ✓ | | |
| `_AlternativeUnitText` | | ✓ | | |
| `_ProductDescription_2` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_InternationalArticleNumber` | `I_Intntnlartnmbcat` | [0..1] |
| `_IntlArticleNumberCatText` | `I_Intntnlartnmbcattext` | [0..*] |
| `_AlternativeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_AlternativeUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_ProductDescription_2` | `I_ProductDescription_2` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDUOMEAN'
@AbapCatalog.preserveKey:true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'International Article Number of Product'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #M
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE
]
@ObjectModel.sapObjectNodeType.name:'ProductUnitOfMeasureEAN'

define view I_ProductUnitOfMeasureEAN
  as select from mean

  association [1..1] to I_Product              as _Product                    on $projection.Product = _Product.Product
  association [0..1] to I_Intntnlartnmbcat     as _InternationalArticleNumber on $projection.InternationalArticleNumberCat = _InternationalArticleNumber.InternationalArticleNumberCat
  association [0..*] to I_Intntnlartnmbcattext as _IntlArticleNumberCatText   on $projection.InternationalArticleNumberCat = _IntlArticleNumberCatText.InternationalArticleNumberCat
  association [0..1] to I_UnitOfMeasure        as _AlternativeUnit            on $projection.AlternativeUnit = _AlternativeUnit.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText    as _AlternativeUnitText        on $projection.AlternativeUnit = _AlternativeUnitText.UnitOfMeasure
  association [0..*] to I_ProductDescription_2 as _ProductDescription_2       on $projection.Product = _ProductDescription_2.Product
{

  key mean.matnr                                                         as Product,
  key mean.meinh                                                         as AlternativeUnit,
  key mean.lfnum                                                         as ConsecutiveNumber,
      mean.ean11                                                         as ProductStandardID,
      @ObjectModel.foreignKey.association: '_InternationalArticleNumber'
      @ObjectModel.text.association: '_IntlArticleNumberCatText'
      @ObjectModel.sapObjectNodeTypeReference:'GlobalTradeItemNumberCategory'
      cast(mean.eantp as internationalarticlenumbercat preserving type ) as InternationalArticleNumberCat,

      //      Retail Fields
      mean.hpean                                                         as IsMainGlobalTradeItemNumber,
      _Product,
      _InternationalArticleNumber,
      _IntlArticleNumberCatText,
      _AlternativeUnit,
      _AlternativeUnitText,
      _ProductDescription_2


}
```
