---
name: I_OVRLBILLINGDOCREQSTATUSTEXT
description: "OVRLBilling DocumentREQSTATUSTEXT"
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - interface-view
  - text-view
  - billing-document
  - billing
  - text
  - status
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# I_OVRLBILLINGDOCREQSTATUSTEXT

**OVRLBilling DocumentREQSTATUSTEXT**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OverallBillingDocReqStatus` | ✓ | |  | `substring(domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `OverallBillingStatusDesc` |  | |  | `ddtext` |  |  |
| `_OvrlBillingDocReqStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OvrlBillingDocReqStatus` | `I_OvrlBillingDocReqStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OverallBillingDocReqStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY ]
@EndUserText.label: 'Overall Billing Document Request Status - Text'
@Analytics.dataExtraction.enabled: true 
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'IOBILLGDOCRQSTST',
  preserveKey: true
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_OvrlBillingDocReqStatusText
as select from dd07t 

association[0..1] to I_OvrlBillingDocReqStatus as _OvrlBillingDocReqStatus on $projection.OverallBillingDocReqStatus = _OvrlBillingDocReqStatus.OverallBillingDocReqStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_OvrlBillingDocReqStatus'
    key substring(domvalue_l, 1, 1) as OverallBillingDocReqStatus,

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,

    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    @Semantics.text: true
    ddtext as OverallBillingStatusDesc,
    
    //Associations
    _OvrlBillingDocReqStatus,
    _Language
}
where (dd07t.domname = 'BDR_STATUS') and (dd07t.as4local = 'A');
```
