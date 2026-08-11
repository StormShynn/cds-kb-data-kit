---
name: I_PRACONTRACTTYPETEXT
description: "PRA Contract Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACONTRACTTYPETEXT')/$value
semantic_en: "PRA Contract Type - Text"
semantic_vi: "PRA Contract Type - Text — CDS view giao diện dựa trên oiu_cm_cttyp_tx."
keywords:
  - "pra"
  - "contract"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - contract
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRACONTRACTTYPETEXT

**PRA Contract Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACONTRACTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PRAContractType` | ✓ | |  | `ct_type_cd` | `CHAR(2)` | Contract Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `PRAContractTypeName` |  | |  | `ct_type_de` | `CHAR(50)` | Contract Type Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACONTRACTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACONTRACTTYPETEXT')/$value)*

```abap
@EndUserText.label: 'PRA Contract Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVCONTRACTTYPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'PRAContractType'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRAContractTypeText
  as select from oiu_cm_cttyp_tx
{
  key ct_type_cd    as PRAContractType,
      @Semantics.language
  key spras         as Language,
      @Semantics.text
      ct_type_de    as PRAContractTypeName
}
```
