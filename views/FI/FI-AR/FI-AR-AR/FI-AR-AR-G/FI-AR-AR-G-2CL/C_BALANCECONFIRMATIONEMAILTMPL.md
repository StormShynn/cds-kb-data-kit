---
name: C_BALANCECONFIRMATIONEMAILTMPL
description: "This CDS view helps in the context of output management to retrieve e-mail template relevant information for sending balance confirmation letters and checklist as attachment. The fields included in the view can be used as placeholders, to make an email text more specific. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-AR-G-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BALANCECONFIRMATIONEMAILTMPL')/$value
semantic_en: "This CDS view helps in the context of output management to retrieve e-mail template relevant information for sending balance confirmation letters and checklist as attachment. The fields included in the view can be used as placeholders, to make an email text more specific. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Email Template for Balance Confirmation — CDS view tiêu dùng dựa trên I_OutputRequestItem."
keywords:
  - "email"
  - "template"
  - "for"
  - "balance"
  - "confirmation"
  - "output"
  - "request"
  - "item"
  - "account"
  - "company"
  - "code"
  - "financial"
  - "type"
tags:
  - FI
  - bo:companycode
  - component:FI-AR-AR-G-2CL
  - consumption-view
  - FI-AR
  - FI-AR-AR
  - FI-AR-AR-G
  - FI-AR-AR-G-2CL
  - lob:finance
---
# C_BALANCECONFIRMATIONEMAILTMPL

**This CDS view helps in the context of output management to retrieve e-mail template relevant information for sending balance confirmation letters and checklist as attachment. The fields included in the view can be used as placeholders, to make an email text more specific. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-G-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BALANCECONFIRMATIONEMAILTMPL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OutputRequestItemUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `Account` |  | |  | `Recipient` | `CHAR(10)` | Recipient ID |
| `CompanyCode` |  | |  | `SenderOrganizationalCenter` | `CHAR(40)` | Output Management: Organization ID |
| `FinancialAccountType` |  | |  | `cast (RecipientRole as fis_koart)` | `CHAR(1)` | Financial Account Type |
| `BalanceConfirmationID` |  | |  | `OutputControlApplicationObject` | `CHAR(255)` | Application Object ID |
| `Name` |  | | `_EmlTmpl` | `Name` | `CHAR(80)` | Name of Customer |
| `FullName` |  | | `_EmlTmpl` | `FullName` | `CHAR(220)` | Customer Full Name |
| `CompanyCodeName` |  | | `_EmlTmpl` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `ReferenceAccountGroup` |  | | `_EmlTmpl` | `ReferenceAccountGroup` | `CHAR(4)` | Customer Account Group |
| `KeyDate` |  | | `_BalanceConfirmation` | `KeyDate` | `DATS(8)` | Balance Reconciliation Key Date |
| `IssueDate` |  | | `_BalanceConfirmation` | `IssueDate` | `DATS(8)` | Issue Date of the Balance Confirmations |
| `ReplyUntilDate` |  | | `_BalanceConfirmation` | `ReplyUntilDate` | `DATS(8)` | Latest Date up Until Which a Reply Should Take Place |
| `_EmailTmpl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EmailTmpl` | `I_EmlTmplCustSuplrCompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BALANCECONFIRMATIONEMAILTMPL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BALANCECONFIRMATIONEMAILTMPL')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CBLNCCNFRMEMAILT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Email Template for Balance Confirmation'
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations:true



define view C_BalanceConfirmationEmailTmpl
  as select from I_OutputRequestItem            as _ORItem
    inner join   I_EmlTmplCustSuplrCompanyCode  as _EmlTmpl             on  _ORItem.Recipient                  = _EmlTmpl.Account
                                                                        and _ORItem.SenderOrganizationalCenter = _EmlTmpl.CompanyCode
                                                                        and _ORItem.RecipientRole              = _EmlTmpl.FinancialAccountType
    inner join   R_BalanceConfirmationEmailTmpl as _BalanceConfirmation on _ORItem.OutputControlApplicationObject = _BalanceConfirmation.BalanceConfirmationID
  association [0..1] to I_EmlTmplCustSuplrCompanyCode as _EmailTmpl on  $projection.Account              = _EmailTmpl.Account
                                                                    and $projection.CompanyCode          = _EmailTmpl.CompanyCode
                                                                    and $projection.FinancialAccountType = _EmailTmpl.FinancialAccountType
{
  key OutputRequestItemUUID,
      Recipient                         as Account,
      SenderOrganizationalCenter        as CompanyCode,
      cast (RecipientRole as fis_koart) as FinancialAccountType,
      OutputControlApplicationObject    as BalanceConfirmationID,
      _EmlTmpl.Name,
      _EmlTmpl.FullName,
      _EmlTmpl.CompanyCodeName,
      _EmlTmpl.ReferenceAccountGroup,
      //_EmlTmpl.AuthorizationGroup,
      //_EmlTmpl.CoCodeSpcfcAuthorizationGroup,
      _BalanceConfirmation.KeyDate,
      _BalanceConfirmation.IssueDate,
      _BalanceConfirmation.ReplyUntilDate,
      _EmailTmpl
}
where
  OutputControlApplObjectType = 'FIN_FO_BLNC_CNFRM'
```
