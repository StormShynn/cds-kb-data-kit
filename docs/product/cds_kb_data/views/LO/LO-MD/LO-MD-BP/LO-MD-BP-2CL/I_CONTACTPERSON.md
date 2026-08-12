---
name: I_CONTACTPERSON
description: "Contactperson"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_CONTACTPERSON

**Contactperson**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContactPerson` | ✓ | |  | `parnr` |  |  |
| `Customer` |  | |  | `kunnr` |  |  |
| `Supplier` |  | |  | `lifnr` |  |  |
| `ContactPersonFunction` |  | |  | `pafkt` |  |  |
| `ContactPersonDepartment` |  | |  | `abtnr` |  |  |
| `SearchTerm1` |  | |  | `sortl` |  |  |
| `SearchTerm` |  | |  | `sortl` |  |  |
| `PersonNumber` |  | |  | `prsnr` |  |  |
| `UpperCaseFirstName` |  | |  | `mc_namefir` |  |  |
| `UpperCaseLastName` |  | |  | `mc_namelas` |  |  |
| `FirstName` |  | |  | `name_first` |  |  |
| `LastName` |  | |  | `name_last` |  |  |
| `PersonFullName` |  | |  | `name_text` |  |  |
| `IsBusinessPurposeCompleted` |  | |  | `cvp_xblck_k` |  |  |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_CustLink` | | ✓ | | | | |
| `_SuppLink` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_CustLink` | `I_BPCustomerContactLink` | [0..1] |
| `_SuppLink` | `I_BPSupplierContactLink` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICONTACTPERSON'
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Contact Person'//'Customer contact person data'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking:  #NOT_REQUIRED
@ObjectModel.sapObjectNodeType.name: 'CustomerContactPerson' 
@ObjectModel.representativeKey: 'ContactPerson'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION                                     
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}

@Metadata.allowExtensions: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_ContactPerson
  as select from    knvk
    left outer join adrp on adrp.persnumber = knvk.prsnr
    association to I_Customer as _Customer on knvk.kunnr = _Customer.Customer
    association to I_Supplier as _Supplier on knvk.lifnr = _Supplier.Supplier
 //   association[0..1] to I_BPCustSuppContactLink  as _BPCustVendContactLink on knvk.parnr = _BPCustVendContactLink.ContactPerson
     association[0..1] to I_BPCustomerContactLink  as _CustLink on knvk.parnr = _CustLink.CustomerContact
   
     association[0..1] to I_BPSupplierContactLink  as _SuppLink on knvk.parnr = _SuppLink.SupplierContact 
{
  key knvk.parnr      as ContactPerson, -- Contact Person Number
      knvk.kunnr      as Customer, -- Customer Number
      knvk.lifnr      as Supplier, -- Account Number of Vendor or Creditor
      knvk.pafkt      as ContactPersonFunction, -- Contact person function
      knvk.abtnr      as ContactPersonDepartment, -- Contact person department
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SearchTerm'
      knvk.sortl      as SearchTerm1, -- Sort field
      knvk.sortl     as  SearchTerm, -- Sort field
      knvk.prsnr      as PersonNumber,
      adrp.mc_namefir as UpperCaseFirstName, -- First name in upper case for search help
      adrp.mc_namelas as UpperCaseLastName, -- Last name in upper case for search help
      adrp.name_first as FirstName, -- First Name
      adrp.name_last  as LastName, -- Last Name
      adrp.name_text  as PersonFullName, -- Full Name
      //for DCL
      knvk.cvp_xblck_k as IsBusinessPurposeCompleted,

      _Customer,
      _Supplier,
      _CustLink,
      _SuppLink
//      @UI.hidden: true
//      _BPCustVendContactLink.PersonUUID,
//      _BPCustVendContactLink._BusinessPartnerPerson as _BusinessPartnerPerson
   
}
```
