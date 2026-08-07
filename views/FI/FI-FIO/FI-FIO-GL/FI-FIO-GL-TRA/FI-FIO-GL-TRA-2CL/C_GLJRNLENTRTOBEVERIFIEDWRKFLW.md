---
name: C_GLJRNLENTRTOBEVERIFIEDWRKFLW
description: This CDS view is to enrich the email template with journal entry to be verified and workflow task values at runtime. This CDS view provides the data to answer the following business questions: What fields are available to show in the email template of journal entries to be verified? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-FIO-GL-TRA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRTOBEVERIFIEDWRKFLW')/$value
semantic_en: This CDS view is to enrich the email template with journal entry to be verified and workflow task values at runtime. This CDS view provides the data to answer the following business questions: What fields are available to show in the email template of journal entries to be verified? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Jrnl entry to be verified and work item — CDS view tiêu dùng dựa trên I_WorkflowTask.
keywords:
  - jrnl
  - entry
  - verified
  - and
  - work
  - item
  - workflow
  - task
  - internal
  - accounting
  - document
  - company
  - code
  - fiscal
  - year
tags:
  - FI
  - bo:companycode
  - component:FI-FIO-GL-TRA-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-TRA
  - FI-FIO-GL-TRA-2CL
  - lob:finance
  - task
---
# C_GLJRNLENTRTOBEVERIFIEDWRKFLW

**This CDS view is to enrich the email template with journal entry to be verified and workflow task values at runtime. This CDS view provides the data to answer the following business questions: What fields are available to show in the email template of journal entries to be verified? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-TRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRTOBEVERIFIEDWRKFLW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_WorkflowTask` | `WorkflowTaskInternalID` | `NUMC(12)` | Work item ID |
| `AccountingDocument` |  | | `_JournalEntryToBeVerified` | `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `CompanyCode` |  | | `_JournalEntryToBeVerified` | `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` |  | | `_JournalEntryToBeVerified` | `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `ObjectKey` |  | | `_JournalEntryToBeVerified` | `ObjectKey` | `CHAR(20)` | Object key |
| `DocumentDate` |  | | `_JournalEntryToBeVerified` | `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `PostingDate` |  | | `_JournalEntryToBeVerified` | `PostingDate` | `DATS(8)` | Posting Date |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRTOBEVERIFIEDWRKFLW')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRTOBEVERIFIEDWRKFLW')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CGLJEVERWF'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #C
@VDM.viewType: #CONSUMPTION
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Jrnl entry to be verified and work item'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#OUTPUT_EMAIL_DATA_PROVIDER]

define view C_GLJrnlEntrToBeVerifiedWrkFlw
  as select from           I_WorkflowTask            as _WorkflowTask
    left outer to one join I_WorkflowTaskApplObject  as _WorkflowTaskApplObject   on  _WorkflowTaskApplObject.WorkflowTaskInternalID = _WorkflowTask.WorkflowTaskInternalID
                                                                                  and _WorkflowTaskApplObject.WorkflowObjectRole     = '01'
    left outer to one join I_GLJrnlEntryToBeVerified as _JournalEntryToBeVerified on _JournalEntryToBeVerified.ObjectKey = _WorkflowTaskApplObject.TechnicalWrkflwObject

{
  key _WorkflowTask.WorkflowTaskInternalID,
      _JournalEntryToBeVerified.AccountingDocument,
      _JournalEntryToBeVerified.CompanyCode,
      _JournalEntryToBeVerified.FiscalYear,
      _JournalEntryToBeVerified.ObjectKey,
      _JournalEntryToBeVerified.DocumentDate,
      _JournalEntryToBeVerified.PostingDate
}
```
