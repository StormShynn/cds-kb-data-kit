---
name: I_SDBILLINGPLAN
description: Sdbillingplan
app_component: SD-BIL-IV-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IV
  - interface-view
  - billing
  - component:SD-BIL-IV-BP-2CL
  - lob:Sales & Distribution
---
# I_SDBILLINGPLAN

**Sdbillingplan**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingPlan` | ✓ | |  |  |  |  |
| `BillingPlanCategory` |  | |  |  |  |  |
| `BillingPlanUsageCategory` |  | |  |  |  |  |
| `BillingPlanType` |  | |  |  |  |  |
| `BillingPlanStartDate` |  | |  |  |  |  |
| `BillingPlanStartDateRule` |  | |  |  |  |  |
| `BillingPlanEndDate` |  | |  |  |  |  |
| `BillingPlanEndDateRule` |  | |  |  |  |  |
| `BillingPlanSearchTerm` |  | |  |  |  |  |
| `SalesDocument` |  | |  |  |  |  |
| `ReferenceBillingPlan` |  | |  |  |  |  |
| `_SDBillingPlanItem` | | ✓ | | | | |
| `_BillingPlanCategory` | | ✓ | | | | |
| `_BillingPlanUsageCategory` | | ✓ | | | | |
| `_BillingPlanType` | | ✓ | | | | |
| `_StartDateRule` | | ✓ | | | | |
| `_EndDateRule` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SDBillingPlanItem` | `I_SDBillingPlanItem` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Billing Plan for SD Documents'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #NOT_REQUIRED,
  privilegedAssociations: ['_SDBILLINGPLANITEM']
}
@ObjectModel: {
   representativeKey: 'BillingPlan',
   compositionRoot: true,
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #L
   },
  modelingPattern: #ANALYTICAL_DIMENSION
}
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
//                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'fpla', role: #MAIN,
                    viewElement: ['BillingPlan'],
                    tableElement: ['fplnr']
                }
            ]
        }
    }
 }                                     
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'SDBillingPlan'

define view entity I_SDBillingPlan
  as select from P_BillingPlan
  association [0..*] to I_SDBillingPlanItem as _SDBillingPlanItem on _SDBillingPlanItem.BillingPlan = $projection.BillingPlan
{
  key BillingPlan,
      @ObjectModel.foreignKey.association: '_BillingPlanCategory'
      BillingPlanCategory,
      @ObjectModel.foreignKey.association: '_BillingPlanUsageCategory'
      BillingPlanUsageCategory,
      @ObjectModel.foreignKey.association: '_BillingPlanType'
      BillingPlanType,
      BillingPlanStartDate,
      @ObjectModel.foreignKey.association: '_StartDateRule'
      BillingPlanStartDateRule,
      BillingPlanEndDate,
      @ObjectModel.foreignKey.association: '_EndDateRule'
      BillingPlanEndDateRule,
      BillingPlanSearchTerm,
      SalesDocument,
      //      @ObjectModel.foreignKey.association: '_NextBillingDateRule'
      //      BillingPlanNextBillingDateRule,
      //      @ObjectModel.foreignKey.association: '_DeviatingDteDetermineRule'
      //      DeviatingBillgDteDetermineRule,
      //      @ObjectModel.foreignKey.association: '_HrznDateDetermineRule'
      //      BillgPlnHrznDateDetermineRule,
      //      BillgDocIsCreatedInAdvance,
      //      BillingPlanFromDate,
      //      BillingPlanUntilDate,
      //      @ObjectModel.foreignKey.association: '_FromDateRule'
      //      BillingPlanFromDateRule,
      //      @ObjectModel.foreignKey.association: '_UntilDateRule'
      //      BillingPlanUntilDateRule,
      //      CorrectionDateIsAutoCreated,
      //      @ObjectModel.foreignKey.association: '_FactoryCalendar'
      //      BillgDocDateFactoryCalendar,
      ReferenceBillingPlan,

      //Associations
      _SDBillingPlanItem,
      _BillingPlanCategory,
      _BillingPlanUsageCategory,
      _BillingPlanType,
      _StartDateRule,
      _EndDateRule
      //      _NextBillingDateRule,
      //      _DeviatingDteDetermineRule,
      //      _HrznDateDetermineRule,
      //      _FromDateRule,
      //      _UntilDateRule,
      //      _FactoryCalendar
}
where
  BillingPlanCategory = '0';
```
