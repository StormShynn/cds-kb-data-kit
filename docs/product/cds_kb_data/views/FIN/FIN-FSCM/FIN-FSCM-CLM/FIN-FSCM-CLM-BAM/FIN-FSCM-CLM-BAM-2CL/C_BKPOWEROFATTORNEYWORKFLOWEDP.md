---
name: C_BKPOWEROFATTORNEYWORKFLOWEDP
description: "This CDS view is used during the workflow for powers of attorney as data provider for the email notifications. This CDS view provides the data to answer the following business questions: Which power of attorney is affected? What is the URL for the workflow task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOWEROFATTORNEYWORKFLOWEDP')/$value
semantic_en: "This CDS view is used during the workflow for powers of attorney as data provider for the email notifications. This CDS view provides the data to answer the following business questions: Which power of attorney is affected? What is the URL for the workflow task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Power of Attorney Email Data Provider — CDS view tiêu dùng dựa trên I_BankPowerOfAttorney."
keywords:
  - "power"
  - "attorney"
  - "email"
  - "data"
  - "provider"
  - "workflow"
  - "task"
  - "internal"
  - "bank"
  - "name"
  - "validity"
  - "start"
  - "date"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - notification
  - task
  - bo:purchaseorder
---
# C_BKPOWEROFATTORNEYWORKFLOWEDP

**This CDS view is used during the workflow for powers of attorney as data provider for the email notifications. This CDS view provides the data to answer the following business questions: Which power of attorney is affected? What is the URL for the workflow task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOWEROFATTORNEYWORKFLOWEDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | |  |  | `NUMC(12)` | Work item ID |
| `BankPowerOfAttorney` |  | |  |  | `CHAR(20)` | Power of Attorney ID |
| `BankPowerOfAttorneyName` |  | |  |  | `CHAR(40)` | Power of Attorney Description |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  | `case when POA.ValidityEndDate = '00000000' then '99991231' else POA.ValidityEndDate end` | `DATS(8)` | Valid-To Date |
| `BankPowerOfAttorneyType` |  | |  |  | `CHAR(4)` | Power of Attorney Type |
| `BankPowerOfAttorneyStatus` |  | |  |  | `CHAR(2)` | Power of Attorney Status |
| `BkPOAAuthorizationGroup` |  | |  |  | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `WorkflowTaskURL` |  | |  |  | `SSTR(1333)` | Workflow: Workflow Task URL |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOWEROFATTORNEYWORKFLOWEDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOWEROFATTORNEYWORKFLOWEDP')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Power of Attorney Email Data Provider'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #MIXED
}
@ObjectModel.modelingPattern:           #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [  #OUTPUT_EMAIL_DATA_PROVIDER   ]
@VDM.viewType:#CONSUMPTION

define view entity C_BkPowerOfAttorneyWorkflowEDP
  as select from           I_BankPowerOfAttorney    as POA
    inner join             I_WorkflowTaskApplObject as ApplicationObject on ApplicationObject.SAPBusinessObjectNodeKey1 = bintohex(
      POA.BankPowerOfAttorneyUUID
    )
    inner join             I_WorkflowTask           as Task              on Task.WorkflowTaskInternalID = ApplicationObject.WorkflowTaskInternalID
    left outer to one join I_WorkflowTaskURL        as URL               on Task.WorkflowTaskInternalID = URL.WorkflowTaskInternalID
{
  key Task.WorkflowTaskInternalID,
      POA.BankPowerOfAttorney,
      POA.BankPowerOfAttorneyName,
      POA.ValidityStartDate,
      case
        when POA.ValidityEndDate = '00000000' then '99991231'
        else POA.ValidityEndDate 
      end as ValidityEndDate,
      POA.BankPowerOfAttorneyType,
      POA._BkPOAType._Text[1:Language = $session.system_language].BankPowerOfAttorneyTypeName,
      POA.BankPowerOfAttorneyStatus,
      @EndUserText.label: 'Power of Attorney Status Description'
      POA._BkPOAStatusText[1:Language = $session.system_language].BankPowerOfAttorneyStatusName,
      // Auth group is needed for access control
      POA.BkPOAAuthorizationGroup,
      URL.WorkflowTaskURL
}
where
       ApplicationObject.SAPObjectNodeRepresentation = 'BankPowerOfAttorney'
  //  and ApplicationObject.WorkflowObjectRole  =
  and(
       POA.BankPowerOfAttorneyIsBlocked              = ''
    or POA.BankPowerOfAttorneyIsBlocked              is null
  )
```
