---
name: C_PRODCOMMODITYCODEFORKEYDATE
description: "Prodcommoditycodeforkeydate"
app_component: FT-ITR-CLS
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
  - FT
  - FT-ITR
  - FT-ITR-CLS
  - consumption-view
  - commodity
  - component:FT-ITR-CLS
  - lob:Other
---
# C_PRODCOMMODITYCODEFORKEYDATE

**Prodcommoditycodeforkeydate**

| Property | Value |
|---|---|
| App Component | `FT-ITR-CLS` |
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
| `TrdClassfctnNmbrSchm` | ✓ | |  |  |  |  |
| `TrdClassfctnNmbrSchmCntnt` | ✓ | |  |  |  |  |
| `Product` | ✓ | |  |  |  |  |
| `ValidityStartDate` | ✓ | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `CommodityCode` |  | |  | `cast (_CommodityCode.TrdClassfctnNmbr as /sapsll/comco)` |  |  |
| `Country` |  | | `_TrdClassfctnNmbrSchmUsge` | `Country` |  |  |
| `CustomsUnitOfMeasure` |  | | `_CommodityCode` | `CustomsUnitOfMeasure` |  |  |
| `UnitOfMeasureSystem` |  | | `_CommodityCode` | `UnitOfMeasureSystem` |  |  |
| `SecondCustomsUnitOfMeasure` |  | | `_CommodityCode` | `SecondCustomsUnitOfMeasure` |  |  |
| `SecondSupplementaryUnit` |  | | `_CommodityCode` | `SecondSupplementaryUnit` |  |  |
| `SupplementaryUnit` |  | | `_CommodityCode` | `SupplementaryUnit` |  |  |
| `_CommodityCodeText` | | ✓ | | | | |
| `_TrdClassfctnNmbrSchm` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CommodityCode` | `I_TrdClassfctnNmbr` | [0..1] |
| `_CommodityCodeText` | `I_TrdClassfctnNmbrText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Product Commodity Code Classification for Key Date'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.sqlViewName: 'CPRCMDTYCDFKDATE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: 'L'
@ObjectModel.usageType.dataClass: #MIXED

@ObjectModel.modelingPattern:#NONE

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                   ]                                
define view C_ProdCommodityCodeForKeyDate
  with parameters  
    P_KeyDate : sll_validon
  as select from           C_ProductTrdClassfctn (P_KeyDate : $parameters.P_KeyDate) as Class
    inner join             I_TrdClassfctnNmbrSchmUsge                                as _TrdClassfctnNmbrSchmUsge on _TrdClassfctnNmbrSchmUsge.TrdClassfctnNmbrSchm = Class.TrdClassfctnNmbrSchm
    association [0..1] to  I_TrdClassfctnNmbr                                        as _CommodityCode            on  _CommodityCode.TrdClassfctnNmbr          =  Class.TrdClassfctnNmbr
                                                                                                                  and _CommodityCode.TrdClassfctnNmbrSchmCntnt =  Class.TrdClassfctnNmbrSchmCntnt
    association [0..*] to  I_TrdClassfctnNmbrText  as _CommodityCodeText on  _CommodityCodeText.TrdClassfctnNmbrSchmCntnt = $projection.TrdClassfctnNmbrSchmCntnt
                                                                         and _CommodityCodeText.TrdClassfctnNmbr          = $projection.CommodityCode
                                                                         and _CommodityCodeText.TrdClassfctnNmbrTextType  = 'A'
                                                                         and _CommodityCodeText.ValidityStartDate         = $projection.ValidityStartDate                                                                                                              
{
  key Class.TrdClassfctnNmbrSchm,
  key Class.TrdClassfctnNmbrSchmCntnt, 
  key Class.Product,
  key Class.ValidityStartDate,
      Class.ValidityEndDate, 
      @ObjectModel.text.association: '_CommodityCodeText'
      cast (_CommodityCode.TrdClassfctnNmbr as /sapsll/comco) as CommodityCode,
      _TrdClassfctnNmbrSchmUsge.Country,
      _CommodityCode.CustomsUnitOfMeasure,
      _CommodityCode.UnitOfMeasureSystem,
      _CommodityCode.SecondCustomsUnitOfMeasure,
      _CommodityCode.SecondSupplementaryUnit,
      _CommodityCode.SupplementaryUnit,
       
      _TrdClassfctnNmbrSchm,
      _CommodityCode._CustomsUnitOfMeasure,
      _CommodityCode._SecondCustomsUnitOfMeasure,
      _CommodityCodeText,
      _Country,
      _CommodityCode._SupplementaryUnit,
      _CommodityCode._SecondSupplementaryUnit,
      _Product
}
where
      Class.TrdClassfctnNmbrSchmType = '01'
  and _CommodityCode.ValidityStartDate <= Class.ValidityStartDate
  and _CommodityCode.ValidityEndDate >= Class.ValidityEndDate
```
