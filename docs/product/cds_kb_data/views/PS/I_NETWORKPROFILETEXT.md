---
name: I_NETWORKPROFILETEXT
description: "Network Profile - Text"
app_component: PS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NETWORKPROFILETEXT')/$value
semantic_en: "Network Profile - Text"
semantic_vi: "Network Profile - Text — CDS view giao diện dựa trên tcn4t."
keywords:
  - "network"
  - "profile"
  - "text"
  - "language"
  - "bill"
  - "operations"
  - "application"
  - "name"
tags:
  - PS
  - bo:companycode
  - component:PS
  - interface-view
---
# I_NETWORKPROFILETEXT

**Network Profile - Text**

| Property | Value |
|---|---|
| App Component | `PS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NETWORKPROFILETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `NetworkProfile` | ✓ | |  | `profidnetz` | `CHAR(7)` | Network Profile |
| `BillOfOperationsApplication` | ✓ | |  | `plnaw` | `CHAR(1)` | Application of the task list |
| `NetworkProfileName` |  | |  | `profi_txt` | `CHAR(40)` | Text for Profile |
| `_Language` | | ✓ | | | | |
| `_BOOApplication` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_BOOApplication` | `I_BOOApplication` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NETWORKPROFILETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NETWORKPROFILETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'INTWKPROFILETEXT'
@VDM.viewType: #BASIC
//@Analytics: { dataExtraction.enabled: true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'NetworkProfile'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'Network Profile - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:  [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
//@VDM.lifecycle.contract.type:  #SAP_INTERNAL_API

//NOTE : This view is NOT RELEVANT for cloud


define view I_Networkprofiletext
  as select from tcn4t
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
  association [1..1] to I_BOOApplication as _BOOApplication on $projection.BillOfOperationsApplication = _BOOApplication.BillOfOperationsApplication
{
      @Semantics.language : true
  key tcn4t.spras     as Language,
  key profidnetz      as NetworkProfile,
      @ObjectModel.foreignKey.association: '_BOOApplication'
  key plnaw           as BillOfOperationsApplication,
      //  @Semantics.text: true
      //  tcn4t.profi_txt as NetworkProfileText, // do not use.to be removed.
      @Semantics.text: true
      tcn4t.profi_txt as NetworkProfileName,
      _Language,
      _BOOApplication
}
where
  tcn4t.plnaw = 'N';
```
