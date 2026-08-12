---
name: I_KR_CUSTVAT
description: "KR Custvat"
app_component: FI-LOC-FI-KR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - component:FI-LOC-FI-KR
  - lob:Finance
---
# I_KR_CUSTVAT

**KR Custvat**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-KR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  | `kunnr` |  |  |
| `TaxInvcNmbrValidityStartDate` | ✓ | |  | `datab` |  |  |
| `TaxNumber1` |  | |  | `stcd1` |  |  |
| `TaxNumber2` |  | |  | `stcd2` |  |  |
| `BusinessType` |  | |  | `gestyp` |  |  |
| `IndustryType` |  | |  | `indtyp` |  |  |
| `TaxInvoiceRepresentativeName` |  | |  | `repres` |  |  |
| `CustomerBusinessPlace` |  | |  | `business_place` |  |  |
| `ResponsibleDepartmentName1` |  | |  | `department_name` |  |  |
| `ResponsibleDepartmentName2` |  | |  | `rdepname2` |  |  |
| `ResponsiblePersonName1` |  | |  | `person_name` |  |  |
| `ResponsiblePersonName2` |  | |  | `rpername2` |  |  |
| `ResponsiblePersonEmailAddress1` |  | |  | `person_email1` |  |  |
| `ResponsiblePersonEmailAddress2` |  | |  | `person_email2` |  |  |
| `ResponsiblePersonPhoneNumber1` |  | |  | `person_phone1` |  |  |
| `ResponsiblePersonPhoneNumber2` |  | |  | `person_phone2` |  |  |
| `CustomerIsSelfBilling` |  | |  | `selfbilling` |  |  |
| `CustomerIsMonthlyTaxInvcCust` |  | |  | `monthtax` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKRCUSTVAT'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'VAT registration by time'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.preserveKey:true
//@AccessControl.personalData.blocking: #REQUIRED   //CE2005
@AccessControl.personalData.blocking: #BLOCKED_DATA_INCLUDED   //CE2005
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #C
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: 
   [  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]     //CE2011
define view I_KR_CustVAT
  as select from idkr_custvat
{
  key kunnr           as  Customer,
  key datab           as  TaxInvcNmbrValidityStartDate,
      stcd1           as  TaxNumber1,
      stcd2           as  TaxNumber2,
      @Consumption.valueHelpDefinition:[ 
          { entity:{ name: 'I_BusinessTypeVH', element: 'BusinessType'} } 
      ]
      gestyp          as  BusinessType,
      @Consumption.valueHelpDefinition:[ 
          { entity:{ name: 'I_IndustryTypeVH', element: 'IndustryType'} } 
      ]
      indtyp          as  IndustryType,
      repres          as  TaxInvoiceRepresentativeName,
      business_place  as  CustomerBusinessPlace,
      department_name as  ResponsibleDepartmentName1,
      rdepname2       as  ResponsibleDepartmentName2,
      person_name     as  ResponsiblePersonName1,
      rpername2       as  ResponsiblePersonName2,
      person_email1   as  ResponsiblePersonEmailAddress1,
      person_email2   as  ResponsiblePersonEmailAddress2,
      person_phone1   as  ResponsiblePersonPhoneNumber1,
      person_phone2   as  ResponsiblePersonPhoneNumber2,
      selfbilling     as  CustomerIsSelfBilling,
      monthtax        as  CustomerIsMonthlyTaxInvcCust
}
```
