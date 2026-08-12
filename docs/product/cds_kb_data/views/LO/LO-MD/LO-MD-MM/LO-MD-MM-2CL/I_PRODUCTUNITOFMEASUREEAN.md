---
name: I_PRODUCTUNITOFMEASUREEAN
description: "PRODUCTUnit of MeasureEAN"
app_component: LO-MD-MM-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` |  |  |
| `AlternativeUnit` | ✓ | |  | `meinh` |  |  |
| `ConsecutiveNumber` | ✓ | |  | `lfnum` |  |  |
| `ProductStandardID` |  | |  | `ean11` |  |  |
| `InternationalArticleNumberCat` |  | |  | `cast(mean.eantp as internationalarticlenumbercat preserving type )` |  |  |
| `IsMainGlobalTradeItemNumber` |  | |  | `hpean` |  |  |
| `_Product` | | ✓ | | | | |
| `_InternationalArticleNumber` | | ✓ | | | | |
| `_IntlArticleNumberCatText` | | ✓ | | | | |
| `_AlternativeUnit` | | ✓ | | | | |
| `_AlternativeUnitText` | | ✓ | | | | |
| `_ProductDescription_2` | | ✓ | | | | |

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
