---
name: I_PROJBILLGREQAPPRVLSTATUSTEXT
description: Projbillgreqapprvlstatustext
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - text-view
  - text
  - status
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_PROJBILLGREQAPPRVLSTATUSTEXT

**Projbillgreqapprvlstatustext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |
| `ProjBillgReqApprovalStatus` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as pbr_apprvl_status preserving type )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `ProjBillgReqApprovalStatusText` |  | |  | `ddtext` |
| `_Language` | | ✓ | | |
| `_ProjBillgReqApprovalStatus` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.technicalName: 'IPBRAPPRVLSTSTXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Proj Billg Req Approval Status - Text'
//@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META
}

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'ProjBillgReqApprovalStatus'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     //#EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
                                     
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API


define view entity I_ProjBillgReqApprvlStatusText as select from dd07t
  association        to parent I_ProjBillgReqApprovalStatus as _ProjBillgReqApprovalStatus on $projection.ProjBillgReqApprovalStatus = _ProjBillgReqApprovalStatus.ProjBillgReqApprovalStatus
  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language
{
       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
   key cast( dd07t.ddlanguage as spras preserving type )          as Language,

       @ObjectModel.foreignKey.association: '_ProjBillgReqApprovalStatus'
       @ObjectModel.text.element: ['ProjBillgReqApprovalStatusText']
   key cast( substring( domvalue_l, 1, 1 ) as pbr_apprvl_status preserving type ) as ProjBillgReqApprovalStatus,

       @Analytics.hidden: true
       @Consumption.hidden: true
       dd07t.domvalue_l as DomainValue,
       
       @Search.defaultSearchElement: true
       @Search.fuzzinessThreshold: 0.8
       @Search.ranking: #LOW
       @Semantics.text: true
       ddtext                                                     as ProjBillgReqApprovalStatusText,
     
       _ProjBillgReqApprovalStatus,
       _Language
   
} where domname  = 'PBR_WRKFLW_APPRVL_STATUS' and as4local = 'A'
```
