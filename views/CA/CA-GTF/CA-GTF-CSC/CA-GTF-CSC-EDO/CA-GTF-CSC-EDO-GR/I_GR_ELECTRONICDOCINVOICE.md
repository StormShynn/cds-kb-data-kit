---
name: I_GR_ELECTRONICDOCINVOICE
description: GR Electronicdocinvoice
app_component: CA-GTF-CSC-EDO-GR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-GR
  - lob:Cross-Application Components
---
# I_GR_ELECTRONICDOCINVOICE

**GR Electronicdocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-GR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  |  |
| `GR_ElectronicDocRefDocNumber` |  | |  |  |
| `GR_ElectronicDocPrintTaskCode` |  | |  |  |
| `GR_ElectronicDocSeriesPrefix` |  | |  |  |
| `GR_ElectronicDocumentSeries` |  | |  |  |
| `GR_ElectronicDocLegalNumber` |  | |  |  |
| `GR_ElectronicDocUniqueID` |  | |  |  |
| `GR_ElectronicDocMarkID` |  | |  |  |
| `GR_ElectronicDocClfnMarkID` |  | |  |  |
| `GR_ElectronicDocCancelMarkID` |  | |  |  |
| `GR_ElectronicDocCustVATID` |  | |  |  |
| `GR_ElectronicDocIssueDate` |  | |  |  |
| `GR_ElectronicDocInvoiceType` |  | |  |  |
| `GR_ElectronicDocSupplierVATID` |  | |  |  |
| `GR_ElectronicDocBranchID` |  | |  |  |
| `GR_ElectronicDocGrossAmount` |  | |  |  |
| `GR_ElectronicDocPayableAmount` |  | |  |  |
| `GR_ElectronicDocNetAmount` |  | |  |  |
| `GR_ElectronicDocFuelInvoice` |  | |  |  |
| `ElectronicDocCompanyCode` |  | |  |  |
| `ElectronicDocCountry` |  | |  |  |
| `ElectronicDocSourceType` |  | |  |  |
| `ElectronicDocSourceKey` |  | |  |  |
| `ElectronicDocType` |  | |  |  |
| `ElectronicDocProcessStatus` |  | |  |  |
| `ElectronicDocLogicalSystem` |  | |  |  |
| `ElectronicDocLastChangedByUser` |  | |  |  |
| `ElectronicDocLastChangeDate` |  | |  |  |
| `ElectronicDocLastChangeTime` |  | |  |  |
| `ElectronicDocCreatedByUser` |  | |  |  |
| `ElectronicDocCreationDate` |  | |  |  |
| `ElectronicDocCreationTime` |  | |  |  |
| `ElectronicDocSrceCreatedByUser` |  | |  |  |
| `ElectronicDocProcess` |  | |  |  |
| `ElectronicDocLastProcStep` |  | |  |  |
| `ElectronicDocLastProcStepVar` |  | |  |  |
| `ElectronicDocHasError` |  | |  |  |
| `ElectronicDocProcessVersion` |  | |  |  |
| `ElectronicDocRefSqncNmbr` |  | |  |  |
| `ElectronicDocStatus` |  | |  |  |
| `ElectronicDocPostingDate` |  | |  |  |
| `ElectronicDocIsContingency` |  | |  |  |
| `ElectronicDocReferenceProcess` |  | |  |  |
| `ElectronicDocClassName` |  | |  |  |
| `ElectronicDocIsArchPrprocgDone` |  | |  |  |
| `ElectronicDocInterfaceType` |  | |  |  |
| `ElectronicDocApprovalIDValue` |  | |  |  |
| `ElectronicDocInterfaceUUID` |  | |  |  |
| `ElectronicDocFileUUID` |  | |  |  |
| `ElectronicDocResponseCodeValue` |  | |  |  |
| `ElectronicDocInterfaceID` |  | |  |  |
| `ElectronicDocInterfaceVersion` |  | |  |  |
| `ElectronicDocIsCntdInArchive` |  | |  |  |
| `ElectronicDocMetaStatus` |  | |  |  |
| `ElectronicDocProcessForStatus` |  | |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED 

@ObjectModel: {
  usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [#SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}
 
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
 
@Metadata.ignorePropagatedAnnotations: true
 
@EndUserText.label: 'eDocument Greece Country/Region Specific Data'
 
define view entity I_GR_ElectronicDocInvoice
  as select from R_GR_ElectronicDocInvoice as GRInv
  inner join I_ElectronicDoc as EDoc on GRInv.ElectronicDocUUID = EDoc.ElectronicDocUUID
{

  key GRInv.ElectronicDocUUID,
      GRInv.GR_ElectronicDocRefDocNumber,
      GRInv.GR_ElectronicDocPrintTaskCode,
      GRInv.GR_ElectronicDocSeriesPrefix,
      GRInv.GR_ElectronicDocumentSeries,
      GRInv.GR_ElectronicDocLegalNumber,
      GRInv.GR_ElectronicDocUniqueID,
      GRInv.GR_ElectronicDocMarkID,
      GRInv.GR_ElectronicDocClfnMarkID,
      GRInv.GR_ElectronicDocCancelMarkID,
      GRInv.GR_ElectronicDocCustVATID,
      GRInv.GR_ElectronicDocIssueDate,
      GRInv.GR_ElectronicDocInvoiceType,
      GRInv.GR_ElectronicDocSupplierVATID,
      GRInv.GR_ElectronicDocBranchID,
      GRInv.GR_ElectronicDocGrossAmount,
      GRInv.GR_ElectronicDocPayableAmount,
      GRInv.GR_ElectronicDocNetAmount,
      GRInv.GR_ElectronicDocFuelInvoice,
      EDoc.ElectronicDocCompanyCode,
      EDoc.ElectronicDocCountry,
      EDoc.ElectronicDocSourceType,
      EDoc.ElectronicDocSourceKey,
      EDoc.ElectronicDocType,
      EDoc.ElectronicDocProcessStatus,
      EDoc.ElectronicDocLogicalSystem,
      EDoc.ElectronicDocLastChangedByUser,
      EDoc.ElectronicDocLastChangeDate,
      EDoc.ElectronicDocLastChangeTime,
      EDoc.ElectronicDocCreatedByUser,
      EDoc.ElectronicDocCreationDate,
      EDoc.ElectronicDocCreationTime,
      EDoc.ElectronicDocSrceCreatedByUser,
      EDoc.ElectronicDocProcess,
      EDoc.ElectronicDocLastProcStep,
      EDoc.ElectronicDocLastProcStepVar,    
      EDoc.ElectronicDocHasError,
      EDoc.ElectronicDocProcessVersion,
      EDoc.ElectronicDocRefSqncNmbr,
      EDoc.ElectronicDocStatus,
      EDoc.ElectronicDocPostingDate,
      EDoc.ElectronicDocIsContingency,
      EDoc.ElectronicDocReferenceProcess,
      EDoc.ElectronicDocClassName,
      EDoc.ElectronicDocIsArchPrprocgDone,
      EDoc.ElectronicDocInterfaceType,
      EDoc.ElectronicDocApprovalIDValue,
      EDoc.ElectronicDocInterfaceUUID,
      EDoc.ElectronicDocFileUUID,
      EDoc.ElectronicDocResponseCodeValue,
      EDoc.ElectronicDocInterfaceID,
      EDoc.ElectronicDocInterfaceVersion,
      EDoc.ElectronicDocIsCntdInArchive,
      EDoc.ElectronicDocMetaStatus,
      EDoc.ElectronicDocProcessForStatus      
      }
```
