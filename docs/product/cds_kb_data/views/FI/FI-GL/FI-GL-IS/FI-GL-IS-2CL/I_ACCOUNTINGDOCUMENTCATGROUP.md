---
name: I_ACCOUNTINGDOCUMENTCATGROUP
description: "Accounting DocumentUMENTCATGROUP"
app_component: FI-GL-IS-2CL
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
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - accounting-document
  - document
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_ACCOUNTINGDOCUMENTCATGROUP

**Accounting DocumentUMENTCATGROUP**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `AccountingDocumentCatGroup` | ✓ | |  | `cast( dd07l.domvalue_l as fis_bstat_grp )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AccountingDocumentCatGroupT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Category Group of Journal Entry'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'AccountingDocumentCatGroup'
@Analytics.technicalName: 'IFIACCDOCCATGRP'
//@AbapCatalog.buffering.status: #NOT_ALLOWED         
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@Metadata.ignorePropagatedAnnotations: true  
@UI.presentationVariant: [ {sortOrder: [{by: 'AccountingDocumentCatGroup'}]}]

define view entity I_AccountingDocumentCatGroup as select from dd07l
association [0..*] to I_AccountingDocumentCatGroupT as _Text on $projection.AccountingDocumentCatGroup = _Text.AccountingDocumentCatGroup
{
   @ObjectModel.text.association: '_Text'
   key cast( dd07l.domvalue_l as fis_bstat_grp ) as AccountingDocumentCatGroup,
   @ObjectModel.sort.enabled: false
   _Text

} 
where dd07l.domname = 'FIS_BSTAT_GRP' and dd07l.as4local = 'A';
```
