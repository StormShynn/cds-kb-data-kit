---
name: C_PRODCSTMSTRIFNMBRFORKEYDATE
description: "Prodcstmstrifnmbrforkeydate"
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
  - component:FT-ITR-CLS
  - lob:Other
---
# C_PRODCSTMSTRIFNMBRFORKEYDATE

**Prodcstmstrifnmbrforkeydate**

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
| `CustomsTariffNumber` |  | |  | `cast (_CustomsTariffNumber.TrdClassfctnNmbr as /sapsll/tarno)` |  |  |
| `Country` |  | | `_TrdClassfctnNmbrSchmUsge` | `Country` |  |  |
| `CustomsUnitOfMeasure` |  | | `_CustomsTariffNumber` | `CustomsUnitOfMeasure` |  |  |
| `UnitOfMeasureSystem` |  | | `_CustomsTariffNumber` | `UnitOfMeasureSystem` |  |  |
| `SecondCustomsUnitOfMeasure` |  | | `_CustomsTariffNumber` | `SecondCustomsUnitOfMeasure` |  |  |
| `SupplementaryUnit` |  | | `_CustomsTariffNumber` | `SupplementaryUnit` |  |  |
| `_Text` | | ✓ | | | | |
| `_TrdClassfctnNmbrSchm` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomsTariffNumber` | `I_TrdClassfctnNmbr` | [0..1] |
| `_Text` | `I_TrdClassfctnNmbrText` | [0..*] |
| `_TrdClassfctnNmbrSchmUsge` | `I_TrdClassfctnNmbrSchmUsge` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Product Tariff Number Classification for Key Date'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.sqlViewName: 'CPRTRIFNOFKDATE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.usageType.sizeCategory: 'L'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED

@ObjectModel.modelingPattern:#NONE

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                   ]
define view C_ProdCstmsTrifNmbrForKeyDate
  with parameters
    P_KeyDate : sll_validon
    as select from           C_ProductTrdClassfctn (P_KeyDate : $parameters.P_KeyDate) as Class
    association [0..1]      to        I_TrdClassfctnNmbr                     as _CustomsTariffNumber      on  _CustomsTariffNumber.TrdClassfctnNmbr          =  Class.TrdClassfctnNmbr
                                                                             and _CustomsTariffNumber.TrdClassfctnNmbrSchmCntnt =  Class.TrdClassfctnNmbrSchmCntnt
    association [0..*]      to        I_TrdClassfctnNmbrText as _Text        on  _Text.TrdClassfctnNmbrSchmCntnt = $projection.TrdClassfctnNmbrSchmCntnt
                                                                             and _Text.TrdClassfctnNmbr          = $projection.CustomsTariffNumber
                                                                             and _Text.TrdClassfctnNmbrTextType  = 'A'
                                                                             and _Text.ValidityStartDate         = $projection.ValidityStartDate
    association [0..1]      to        I_TrdClassfctnNmbrSchmUsge             as _TrdClassfctnNmbrSchmUsge on _TrdClassfctnNmbrSchmUsge.TrdClassfctnNmbrSchm = Class.TrdClassfctnNmbrSchm
                                                                                                                                                                                                                              
{
  key Class.TrdClassfctnNmbrSchm,
  key Class.TrdClassfctnNmbrSchmCntnt,
  key Class.Product,
  key Class.ValidityStartDate,
      Class.ValidityEndDate,
      @ObjectModel.text.association: '_Text'
      cast (_CustomsTariffNumber.TrdClassfctnNmbr as /sapsll/tarno) as CustomsTariffNumber,
      _TrdClassfctnNmbrSchmUsge.Country,
      _CustomsTariffNumber.CustomsUnitOfMeasure,
      _CustomsTariffNumber.UnitOfMeasureSystem,
      _CustomsTariffNumber.SecondCustomsUnitOfMeasure,
      _CustomsTariffNumber.SupplementaryUnit,

      _TrdClassfctnNmbrSchm,
      _Product,
      _CustomsTariffNumber._CustomsUnitOfMeasure,
      _CustomsTariffNumber._SecondCustomsUnitOfMeasure,
      _Text,
      _CustomsTariffNumber._SupplementaryUnit
}
where
      Class.TrdClassfctnNmbrSchmType = '04'
  and _CustomsTariffNumber.ValidityStartDate <= Class.ValidityStartDate
  and _CustomsTariffNumber.ValidityEndDate >= Class.ValidityEndDate
```
