---
name: F_SUPLREVALCRITERIAGENCONFIGN
description: "Suplrevalcriteriagenconfign"
semantic_vi: "View Suplrevalcriteriagenconfign cung cấp các tiêu chí đánh giá hiệu suất nhà cung cấp, đặc biệt là trạng thái hoàn thành giao hàng. Nó được sử dụng để phân tích và đánh giá hiệu suất nhà cung cấp dựa trên trạng thái hoàn thành giao hàng."
keywords:
  - "supplier performance"
  - "evaluation criteria"
  - "delivery completion"
  - "nhà cung cấp"
  - "tiêu chí đánh giá"
  - "trạng thái hoàn thành giao hàng"
  - "sourcing"
  - "procurement"
  - "mm-pur-ana"
  - "ekko"
semantic_en: "The Suplrevalcriteriagenconfign view provides evaluation criteria for supplier performance, specifically delivery completion status. It is used to analyze and evaluate supplier performance based on delivery completion."
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - fact-view
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# F_SUPLREVALCRITERIAGENCONFIGN

**Suplrevalcriteriagenconfign**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalCritraDelivCompleted` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog: {
                sqlViewName: 'FSUPEVALCRTCON',
                compiler.compareFilter: true,
                preserveKey: true
              }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Supplier Evaluation Criteria Configuration'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
                derivationFunction:
                                    {
                                      applicableFor.element: ['SuplrEvalCritraDelivCmpltFlag'],
                                      result.type: #SINGLE,
                                      result.multipleRecords: false,
                                      result.element: 'SuplrEvalCritraDelivCmpltFlag'
                                    },
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass: #CUSTOMIZING
                           }
              }
@VDM.viewType: #DERIVATION_FUNCTION
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view F_SuplrEvalCriteriaGenConfign
  as select from I_SuplrEvalCriteriaGenConfign
{
   SuplrEvalCritraDelivCompleted
}
 where SuplrEvalUserDefinedCriteria = 'QTYVAR'
```
