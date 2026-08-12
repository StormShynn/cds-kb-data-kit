---
name: I_NETWORKPROFILE
description: "Network Profile Details"
app_component: PS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NETWORKPROFILE')/$value
semantic_en: "Network Profile Details"
semantic_vi: "Network Profile Details — CDS view giao diện dựa trên tcn41."
keywords:
  - "network"
  - "profile"
  - "details"
  - "bill"
  - "operations"
  - "application"
tags:
  - PS
  - bo:companycode
  - component:PS
  - interface-view
---
# I_NETWORKPROFILE

**Network Profile Details**

| Property | Value |
|---|---|
| App Component | `PS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NETWORKPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NetworkProfile` | ✓ | |  | `profidnetz` | `CHAR(7)` | Network Profile |
| `BillOfOperationsApplication` | ✓ | |  | `plnaw` | `CHAR(1)` | Application of the task list |
| `_Text` | | ✓ | | | | |
| `_BOOApplication` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_Networkprofiletext` | [0..*] |
| `_BOOApplication` | `I_BOOApplication` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NETWORKPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NETWORKPROFILE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'INETWORKPROFILE'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'NetworkProfile'
@EndUserText.label: 'Network Profile Details'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'ProjectNetworkProfile'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:  [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
//@VDM.lifecycle.contract.type:  #SAP_INTERNAL_API
//NOTE : To be used in OP only


define view I_NetworkProfile
  as select from tcn41
  association [0..*] to I_Networkprofiletext as _Text           on  $projection.NetworkProfile              = _Text.NetworkProfile
                                                                and $projection.BillOfOperationsApplication = _Text.BillOfOperationsApplication
  association [1..1] to I_BOOApplication     as _BOOApplication on  $projection.BillOfOperationsApplication = _BOOApplication.BillOfOperationsApplication
{
      @ObjectModel.text.association: '_Text'
  key tcn41.profidnetz as NetworkProfile,
      @ObjectModel.foreignKey.association: '_BOOApplication'
  key plnaw            as BillOfOperationsApplication,

      _Text,
      _BOOApplication

}
where
  tcn41.plnaw = 'N';
```
