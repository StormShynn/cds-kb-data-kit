---
name: I_SUBSCRPNCONTRDURNUNITVH
description: "Subscription Contract Duration Unit"
app_component: CRM-S4-BTX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNCONTRDURNUNITVH')/$value
semantic_en: "Subscription Contract Duration Unit"
semantic_vi: "Subscription Contract Duration Unit — CDS view giao diện dựa trên I_SubscrpnContrDurnUnit."
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
# I_SUBSCRPNCONTRDURNUNITVH

**Subscription Contract Duration Unit**

| Property | Value |
|---|---|
| App Component | `CRM-S4-BTX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNCONTRDURNUNITVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubscrpnContrDurationUnit` | ✓ | |  |  | `CHAR(1)` | Unit for Contract Term |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNCONTRDURNUNITVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNCONTRDURNUNITVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISUCTRDURUNITVH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel:
{
  representativeKey: 'SubscrpnContrDurationUnit',
  usageType:
  {
    dataClass: #CUSTOMIZING,
    sizeCategory: #S,
    serviceQuality: #C
  },
  //by defining category=XS, the value help will be displayed as a DropDown list, see https://wiki.wdf.sap.corp/wiki/x/pZAoZQ
  resultSet.sizeCategory: #XS,
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
  modelingPattern: #VALUE_HELP_PROVIDER
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true
@EndUserText.label: 'Subscription Contract Duration Unit'

define view I_SubscrpnContrDurnUnitVH
  as select from I_SubscrpnContrDurnUnit
{
      @ObjectModel.text.element: ['SubscrpnContrDurationUnitText']
  key SubscrpnContrDurationUnit,
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8 }
      @Search.ranking: #HIGH
      @Semantics.text: true
      _SubscrpnContrDurnUnitT[1:Language = $session.system_language].SubscrpnContrDurationUnitText
}
```
