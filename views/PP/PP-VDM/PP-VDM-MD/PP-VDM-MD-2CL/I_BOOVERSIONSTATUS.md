---
name: I_BOOVERSIONSTATUS
description: "Bill of Operations Version Status"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOVERSIONSTATUS')/$value
semantic_en: "Bill of Operations Version Status"
semantic_vi: "Bill of Operations Version Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "bill"
  - "operations"
  - "version"
  - "status"
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_BOOVERSIONSTATUS

**Bill of Operations Version Status**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOVERSIONSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsVersionStatus` | ✓ | |  | `cast(substring(l.domvalue_l, 1, 2) as plnversn_status preserving type)` | `CHAR(2)` | Processing Status of a Version |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BOOVersionStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOVERSIONSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOVERSIONSTATUS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBOOVERSNSTATUS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BillOfOperationsVersionStatus'
@ObjectModel.semanticKey: 'BillOfOperationsVersionStatus'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Bill of Operations Version Status'
@ObjectModel.sapObjectNodeType.name: 'BillOfOperationsVersionStatus'
@Analytics.dataExtraction.enabled: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BOOVersionStatus
  as select from dd07l as l
  association [0..*] to I_BOOVersionStatusText as _Text on $projection.BillOfOperationsVersionStatus = _Text.BillOfOperationsVersionStatus
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(l.domvalue_l, 1, 2) as plnversn_status preserving type) as BillOfOperationsVersionStatus,

      --- Associations ---
      _Text
}
where
      l.domname  = 'PLNVERSN_STATUS'
  and l.as4local = 'A'
  and l.as4vers  = '0000';
```
