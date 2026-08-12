---
name: I_PRELIMBILLGDOCSTATUSTEXT
description: "Prelimbillgdocstatustext"
app_component: SD-BIL-PBD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-PBD
  - interface-view
  - text-view
  - text
  - status
  - component:SD-BIL-PBD-2CL
  - lob:Sales & Distribution
---
# I_PRELIMBILLGDOCSTATUSTEXT

**Prelimbillgdocstatustext**

| Property | Value |
|---|---|
| App Component | `SD-BIL-PBD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PrelimBillingDocumentStatus` | ✓ | |  | `substring(domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `PrelimBillingDocStatusDesc` |  | |  | `ddtext` |  |  |
| `_PrelimBillgDocStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrelimBillgDocStatus` | `I_PrelimBillgDocStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PrelimBillingDocumentStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Analytics.dataExtraction.enabled: true 
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY ]
@EndUserText.label: 'Preliminary Billing Document Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'IPRELIMDOCSTATXT',
  compiler.compareFilter: true,
  preserveKey: true
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true 

define view I_PrelimBillgDocStatusText as select from dd07t

association [0..1] to I_PrelimBillgDocStatus as _PrelimBillgDocStatus on $projection.PrelimBillingDocumentStatus = _PrelimBillgDocStatus.PrelimBillingDocumentStatus
association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_PrelimBillgDocStatus'
  key substring(domvalue_l, 1, 1) as PrelimBillingDocumentStatus,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                  as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      ddtext                      as PrelimBillingDocStatusDesc,

      //Associations
      _PrelimBillgDocStatus,
      _Language

}
where (dd07t.domname  = 'PBD_STATUS') and (dd07t.as4local = 'A');
```
