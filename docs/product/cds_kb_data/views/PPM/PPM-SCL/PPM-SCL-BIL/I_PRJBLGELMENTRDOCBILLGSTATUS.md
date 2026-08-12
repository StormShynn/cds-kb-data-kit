---
name: I_PRJBLGELMENTRDOCBILLGSTATUS
description: "Prjblgelmentrdocbillgstatus"
app_component: PPM-SCL-BIL
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
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - status
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_PRJBLGELMENTRDOCBILLGSTATUS

**Prjblgelmentrdocbillgstatus**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
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
| `DocumentBillingStatus` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as pbee_bdrstatus preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_PrjBlgElmEntrDocBillgStsTxt` | | ✓ | | | | |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IPBEEBDRSTATUS'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true

@Analytics.technicalName: 'IPBEEBDRSTATUS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Document Billing Status'
@ObjectModel.sapObjectNodeType.name: 'ProjBillgElmntEntrDocBillgSts'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.dataExtraction.enabled: true
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'DocumentBillingStatus'
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #TRANSACTIONAL
}
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.dataCategory: #VALUE_HELP                                    

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

//@ClientHandling.algorithm: #SESSION_VARIABLE
define root view entity I_PrjBlgElmEntrDocBillgStatus
  as select from dd07l
  composition [0..*] of I_PrjBlgElmEntrDocBillgStsTxt as _PrjBlgElmEntrDocBillgStsTxt
{
  @ObjectModel.text.association: '_PrjBlgElmEntrDocBillgStsTxt'
  key cast( substring( domvalue_l, 1, 1 ) as pbee_bdrstatus preserving type ) as DocumentBillingStatus,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07l.domvalue_l                                                 as DomainValue,

      _PrjBlgElmEntrDocBillgStsTxt
}
where
      domname  = 'PBEE_BDRSTATUS'
      and as4local = 'A'
```
