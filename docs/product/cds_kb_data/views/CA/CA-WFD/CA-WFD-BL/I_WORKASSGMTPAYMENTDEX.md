---
name: I_WORKASSGMTPAYMENTDEX
description: "This CDS view is designed to provide detailed information about payment details associated with work assignments. This CDS view provides the data to answer the following business questions: What are the payment details for a specific work assignment? Who is the business partner associated with a particular work assignment, and what are their bank details? What is the validity period for the bank account details related to a work assignment? How can I identify blocked work assignments based on payment information? What are the bank identification details for business partners involved in work assignments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTPAYMENTDEX')/$value
semantic_en: "This CDS view is designed to provide detailed information about payment details associated with work assignments. This CDS view provides the data to answer the following business questions: What are the payment details for a specific work assignment? Who is the business partner associated with a particular work assignment, and what are their bank details? What is the validity period for the bank account details related to a work assignment? How can I identify blocked work assignments based on payment information? What are the bank identification details for business partners involved in work assignments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Work Assignment Payment Details — CDS view giao diện dựa trên I_WorkAssignmentKeyMapping."
keywords:
  - "work"
  - "assignment"
  - "payment"
  - "details"
  - "business"
  - "partner"
  - "bank"
  - "identification"
  - "external"
  - "country2"
  - "digit"
  - "code"
tags:
  - CA
  - account
  - bo:bank
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - payment
---
# I_WORKASSGMTPAYMENTDEX

**This CDS view is designed to provide detailed information about payment details associated with work assignments. This CDS view provides the data to answer the following business questions: What are the payment details for a specific work assignment? Who is the business partner associated with a particular work assignment, and what are their bank details? What is the validity period for the bank account details related to a work assignment? How can I identify blocked work assignments based on payment information? What are the bank identification details for business partners involved in work assignments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTPAYMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignmentBusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `BankIdentification` | ✓ | |  |  | `CHAR(4)` | Bank Details ID |
| `WorkAssignment` |  | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` |  | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `BankAccountHolderName` |  | |  |  | `CHAR(60)` | Account Holder Name |
| `BankAccountName` |  | |  |  | `CHAR(40)` | Name of Bank Account |
| `BankControlKey` |  | |  |  | `CHAR(2)` | Bank Control Key |
| `BankCountryKey` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `BankNumber` |  | |  |  | `CHAR(15)` | Bank Key |
| `BankName` |  | |  |  | `CHAR(60)` | Name of Financial Institution |
| `BankAccount` |  | |  |  | `CHAR(18)` | Bank Account Number |
| `IBAN` |  | |  |  | `CHAR(34)` | IBAN (International Bank Account Number) |
| `SWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `StartDate` |  | |  | `cast (tstmp_to_dats( PaymentDetails.ValidityStartDate, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_start_date)` | `DATS(8)` | Start Date |
| `EndDate` |  | |  | `cast (tstmp_to_dats( PaymentDetails.ValidityEndDate, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_end_date)` | `DATS(8)` | End Date |
| `BankAccountReferenceText` |  | |  |  | `CHAR(20)` | Reference Details for Bank Details |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
| `_WorkAssignment` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkAssignment` | `I_WorkAssignmentDEX_1` | [0..1] |
| `_WorkforcePerson` | `I_WorkforcePersonDEX_1` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTPAYMENTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTPAYMENTDEX')/$value)*

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Work Assignment Payment Details'

@Analytics.dataExtraction: {
            enabled: true,
            delta.changeDataCapture:
    {
    
            mapping:[
                  {
                  table:'but0bk', 
                  role: #MAIN, 
                  viewElement :['WorkAssignmentBusinessPartner' ,'BankIdentification'],
                  tableElement:['partner' ,'bkvid']
                  
                },
                {
                    table: 'WFD_D_KEYMAP',
                    role:#LEFT_OUTER_TO_ONE_JOIN ,
                    viewElement: ['WorkAssignment'],
                    tableElement: ['workforce_assgmt_id'] 
                }
            ]




        }
    }

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name:'PaymentDetails'

define view entity I_WorkAssgmtPaymentDEX
  as select from I_WorkAssignmentKeyMapping as Assignment

    inner join   I_WorkAssignmentBP         as AssignmentBP   on AssignmentBP.WorkAssignment = Assignment.WorkAssignment
    inner join   I_BusinessPartnerBank      as PaymentDetails on AssignmentBP.WorkAssignmentBusinessPartner = PaymentDetails.BusinessPartner

  association [0..1] to I_WorkAssignmentDEX_1  as _WorkAssignment  on  _WorkAssignment.WorkAssignment = $projection.WorkAssignment                          
  association [1]    to I_WorkforcePersonDEX_1 as _WorkforcePerson on  _WorkforcePerson.WorkforcePersonExternalID = $projection.WorkforcePersonExternalID
{   
        key AssignmentBP.WorkAssignmentBusinessPartner,
        key PaymentDetails.BankIdentification,
   
       Assignment.WorkAssignment, 
       Assignment.WorkAssignmentExternalID,
       Assignment.Country2DigitISOCode,
       Assignment.WorkforcePersonExternalID,
       PaymentDetails.BankAccountHolderName,
       PaymentDetails.BankAccountName,
       PaymentDetails.BankControlKey,
       PaymentDetails.BankCountryKey,
       PaymentDetails.BankNumber,
       PaymentDetails.BankName,
       PaymentDetails.BankAccount,
       PaymentDetails.IBAN,
       PaymentDetails.SWIFTCode,
       cast (tstmp_to_dats( PaymentDetails.ValidityStartDate,
       abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_start_date) as StartDate,
       cast (tstmp_to_dats( PaymentDetails.ValidityEndDate,
         abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_end_date) as EndDate,
       PaymentDetails.BankAccountReferenceText,
       @Semantics.booleanIndicator: true
       @UI.hidden: true
       Assignment.IsBlocked,

       /* Associations */
       _WorkAssignment,
       _WorkforcePerson

}
```
