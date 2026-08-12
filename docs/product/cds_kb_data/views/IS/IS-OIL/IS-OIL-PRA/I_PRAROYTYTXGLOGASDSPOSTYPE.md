---
name: I_PRAROYTYTXGLOGASDSPOSTYPE
description: "Roy 2 0 TX GLO Agency Gas Dspos Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYTXGLOGASDSPOSTYPE')/$value
semantic_en: "Roy 2 0 TX GLO Agency Gas Dspos Type"
semantic_vi: "Roy 2 0 TX GLO Agency Gas Dspos Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "roy"
  - "glo"
  - "agency"
  - "gas"
  - "dspos"
  - "type"
  - "disposition"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAROYTYTXGLOGASDSPOSTYPE

**Roy 2 0 TX GLO Agency Gas Dspos Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYTXGLOGASDSPOSTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgencyGasDispositionType` | ✓ | |  | `cast( domvalue_l as oiuy3_tx_glo_roy_gas_disp_code )` | `NUMC(2)` | Royalty 2.0 - TX GLO/TAMU - Royalty Gas Disposition Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRARoytyTXGLOGasDsposTypeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYTXGLOGASDSPOSTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYTXGLOGASDSPOSTYPE')/$value)*

```abap
@EndUserText.label: 'Roy 2 0 TX GLO Agency Gas Dspos Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVROYAGGDT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'AgencyGasDispositionType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRATexasRoyaltyDsposType'
define view I_PRARoytyTXGLOGasDsposType
as select from dd07l
  association [0..*] to I_PRARoytyTXGLOGasDsposTypeT as _Text on $projection.AgencyGasDispositionType = _Text.AgencyGasDispositionType
{
      @ObjectModel.text.association: '_Text'
  key cast( domvalue_l as oiuy3_tx_glo_roy_gas_disp_code )   as AgencyGasDispositionType,
      _Text
}
where
      domname  = 'OIUY3_TX_GLO_ROY_GAS_DISP_CODE'
  and as4local = 'A';
```
