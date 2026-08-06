---
name: I_BUDGETDOCWORKFLOWSTATUSTEXT
description: Budgetdocworkflowstatustext
app_component: PSM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - interface-view
  - text-view
  - text
  - status
  - workflow
  - component:PSM
  - lob:Other
---
# I_BUDGETDOCWORKFLOWSTATUSTEXT

**Budgetdocworkflowstatustext**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BudgetDocWorkFlowStatus` | `cast( cast ( substring( dd07t.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bdgt_doc_workflow_status )` |
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| `BudgetDocWorkFlowStatusText` | `cast ( dd07t.ddtext as bdgt_doc_workflow_status_text preserving type )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `_Language` | *Association* |
| `_BudgetDocWorkFlowStatus` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBDGTDOCWFSTATT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Budget Document Work Flow Status - Text'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ],
     dataCategory: #TEXT,
     representativeKey: 'BudgetDocWorkFlowStatus',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     }
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_BudgetDocWorkFlowStatusText
  as select from dd07t
  association        to parent I_BudgetDocWorkFlowStatus as _BudgetDocWorkFlowStatus on $projection.BudgetDocWorkFlowStatus = _BudgetDocWorkFlowStatus.BudgetDocWorkFlowStatus
  association [0..1] to I_Language                       as _Language                on $projection.Language                = _Language.Language
{
      @ObjectModel.foreignKey.association: '_BudgetDocWorkFlowStatus'
      @ObjectModel.text.element: ['BudgetDocWorkFlowStatusText']
  key cast( cast ( substring( dd07t.domvalue_l, 1, 1 )
                   as abap.char( 1 ) ) as bdgt_doc_workflow_status )          as BudgetDocWorkFlowStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )                       as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast ( dd07t.ddtext as bdgt_doc_workflow_status_text preserving type )  as BudgetDocWorkFlowStatusText,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                        as DomainValue,

      _BudgetDocWorkFlowStatus,
      _Language

}
where domname    =  'BDGT_DOC_WORKFLOW_STATUS'
  and as4local   =  'A'
```
