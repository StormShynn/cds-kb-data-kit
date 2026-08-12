---
name: I_SUBSCRPNCONTRDURNUNIT
description: "Subscription Contract Duration Unit"
app_component: CRM-S4-BTX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNCONTRDURNUNIT')/$value
semantic_en: "Subscription Contract Duration Unit"
semantic_vi: "Subscription Contract Duration Unit — CDS view giao diện dựa trên dd07l."
keywords:
  - "subscription"
  - "contract"
  - "duration"
  - "unit"
  - "subscrpn"
  - "contr"
tags:
  - CRM
  - component:CRM-S4-BTX-2CL
  - contract
  - CRM-S4
  - CRM-S4-BTX
  - CRM-S4-BTX-2CL
  - interface-view
---
# I_SUBSCRPNCONTRDURNUNIT

**Subscription Contract Duration Unit**

| Property | Value |
|---|---|
| App Component | `CRM-S4-BTX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNCONTRDURNUNIT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubscrpnContrDurationUnit` | ✓ | |  | `cast(domvalue_l as crms4_som_ctr_term_unit)` | `CHAR(1)` | Unit for Contract Term |
| `_SubscrpnContrDurnUnitT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SubscrpnContrDurnUnitT` | `I_SubscrpnContrDurnUnitT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNCONTRDURNUNIT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNCONTRDURNUNIT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISUCTRDURUNIT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel:
{
  representativeKey: 'SubscrpnContrDurationUnit',
  sapObjectNodeType.name: 'SubscrpnContrDurationUnit',
  usageType:
  {
    dataClass: #CUSTOMIZING,
    sizeCategory: #S,
    serviceQuality: #C
  },

  supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE ]
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Subscription Contract Duration Unit'
define view I_SubscrpnContrDurnUnit
  as select from dd07l
  association [0..*] to I_SubscrpnContrDurnUnitT as _SubscrpnContrDurnUnitT on $projection.SubscrpnContrDurationUnit = _SubscrpnContrDurnUnitT.SubscrpnContrDurationUnit
{
       @ObjectModel.text.association: '_SubscrpnContrDurnUnitT'
  key  cast(domvalue_l as crms4_som_ctr_term_unit) as SubscrpnContrDurationUnit,

       _SubscrpnContrDurnUnitT
}
where
      domname  = 'CRMS4_SOM_CTR_PERIOD_UNIT_UI'
  and as4local = 'A'
```
